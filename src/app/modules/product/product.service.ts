import { Product } from './product.interface';
import ProductModel from './product.model';
type ProductQuery = {
  name: string;
};

const createProductDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  if (typeof result.isDeleted === 'undefined') {
    console.log(result.isDeleted)
    result.isDeleted = false; 
  }
  return result;
};
const getAllProductDB = async (query: ProductQuery) => {
  const dbQuery: any = {};
  if (query.name) {
    dbQuery.name = { $regex: query.name, $options: 'a' };
  }
  const result = await ProductModel.find();
  return result;
};
const getSingleProductDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};
const updateProductDB = async (id: string, updateData: Product) => {
  const result = await ProductModel.findByIdAndUpdate(id, updateData);
  return result;
};
const deleteProductDB = async (id: string) => {
  const result = await ProductModel.updateOne({ _id: id }, { isDeleted: true });
  return result;
};

export const productService = {
  createProductDB,
  getAllProductDB,
  getSingleProductDB,
  updateProductDB,
  deleteProductDB,
};
