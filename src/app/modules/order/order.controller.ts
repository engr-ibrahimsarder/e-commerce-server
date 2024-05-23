import { Request, Response } from 'express';
import { orderService } from './order.service';
type ProductQuery = {
  email: string;
};
const createNewOrder = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await orderService.createNewOrderDB(user);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Order not created',
      error: err,
    });
  }
};
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const data: ProductQuery = req.query as ProductQuery;
    const result = await orderService.getAllUserOrderDB(data);
    if(result.length == 0){
      res.status(500).json({
        success: false,
        message: 'Order not found',
      });
     }
    res.status(200).json({
      success: true,
      message: 'Order featch successfully!',
      data: result,
    });
  } catch (err) { 
    res.status(500).json({
      success: false,
      message: 'order featch not success',
      error: err,
    });
  }
};

export const orderControllers = {
  createNewOrder,
  getAllOrder,
};
