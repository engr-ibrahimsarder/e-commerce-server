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
// const upDateSingleProductDB = async (id : string, update: any) => {
//   const filter = { _id: id };
//   const updateDoc = {
//     $set: update,
// };
//   const result = await ProductModel.updateOne(filter, updateDoc);
//   return result;
// };
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
