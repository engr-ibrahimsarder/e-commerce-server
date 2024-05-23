import { Request, Response } from 'express';
import { productService } from './product.service';
import productValidationSchema from './prodcut.validation';
type ProductQuery = {
  name: string;
}
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const zodParseProduct = productValidationSchema.parse(product)
    const result = await productService.createProductDB(zodParseProduct);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Products fetch fail',
      error
    });
  }
};
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const data: ProductQuery = req.query as ProductQuery;
    const result = await productService.getAllProductDB(data);  
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Products fetch fail',
      error: err,
    });
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productService.getSingleProductDB(id);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Products fetch fail',
      error: err,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const data = req.body;
    const result = await productService.updateProductDB(id, data);  
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Products fetch fail',
      error: err,
    });
  }
};
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await productService.deleteProductDB(id);
    res.status(200).json({
      success: true,
      message: 'Product delete successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Products delete fail',
      error: err,
    });
  }
};

export const productControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
