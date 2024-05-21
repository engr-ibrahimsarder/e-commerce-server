import { Request, Response } from 'express';
import { productService } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productService.createProductDB(product);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId
    const result = await productService.getSingleProductDB(id);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId
    const result = await productService.deleteProductDB(id);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const productControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct
};
