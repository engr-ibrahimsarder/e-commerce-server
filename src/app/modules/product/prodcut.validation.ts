import { z } from 'zod';

// Variant schema
const variantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Inventory schema
const inventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

// Product schema
const productValidationSchema = z.object({
  name: z.string().max(20).trim(),
  description: z.string().trim(),
  price: z.number().min(0), // Adjusted for non-negative prices as minlength doesn't apply to numbers
  category: z.string().trim(),
  tags: z.array(z.string().trim()),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
  isDeleted: z.boolean(),
});

export default productValidationSchema;
