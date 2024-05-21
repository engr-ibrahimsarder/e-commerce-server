import { Product } from './product.interface';
import ProductModel from './product.model';

const createProductDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};
const getAllProductDB = async () => {
  const result = await ProductModel.find();
  return result;
};
const getSingleProductDB = async (id : string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};
const deleteProductDB = async (id : string) => {
  const result = await ProductModel.deleteOne({_id: id});
  return result;
};

export const productService = {
  createProductDB,
  getAllProductDB,
  getSingleProductDB,
  deleteProductDB
};
