import { User } from './order.interface';
import UserModel from './order.model';

const createNewOrderDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};
const getAllUserOrderDB = async () => {
  const result = await UserModel.find();
  return result;
};

export const orderService = {
  createNewOrderDB,
  getAllUserOrderDB,
};
