import { Schema, model } from 'mongoose';
import { Inventory, Product, Variant } from './product.interface';

// sivling shema
const variantSchema = new Schema<Variant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});
// sivling shema
const inventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});
// product main schema
const productSchema = new Schema<Product>({
  name: { type: String, required: true, maxlength: 20, trim: true },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true, minlength: 1, trim: true },
  category: { type: String, required: true, trim: true },
  tags: { type: [String], required: true, trim: true },
  variants: { type: [variantSchema], required: true, trim: true },
  inventory: { type: inventorySchema, required: true, trim: true },
  isDeleted: { type: Boolean, default: false },
});

// middleware
productSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
productSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

const ProductModel = model<Product>('Product', productSchema);
export default ProductModel;
