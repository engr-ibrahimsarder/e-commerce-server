import { Request, Response } from 'express';
import { orderService } from './order.service';

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
    console.log(err);
  }
};
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getAllUserOrderDB();
    res.status(200).json({
      success: true,
      message: 'Order featch successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const orderControllers = {
  createNewOrder,
  getAllOrder,
};
