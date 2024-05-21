import { Schema, model } from "mongoose";
import { User } from "./order.interface";

const userSchema = new Schema<User>({
    productId: {type: String, required: true},
    email: {type: String, required: true},
    price: {type: Number, required: true},
    quantity: {type: Number, required: true}
})

const UserModel = model<User>('order', userSchema)
export default UserModel;