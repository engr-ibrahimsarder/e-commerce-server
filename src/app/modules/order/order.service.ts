import { User } from './order.interface';
import UserModel from './order.model';
type ProductQuary = {
  email: string;
}
const createNewOrderDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};
const getAllUserOrderDB = async (query: ProductQuary) => {
  const dbQuery: any = {}
  if (query.email) {
    dbQuery.email = { $regex: query.email, $options: 'i' };
  }
  const result = await UserModel.find();
  return result;
};

export const orderService = {
  createNewOrderDB,
  getAllUserOrderDB,
};
