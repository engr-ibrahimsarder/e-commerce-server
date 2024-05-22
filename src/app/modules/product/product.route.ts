import express from 'express';
import { productControllers } from './product.controller';
const router = express.Router();

router.post('/create-product', productControllers.createProduct);
router.get('/', productControllers.getAllProduct);
router.get('/:productId', productControllers.getSingleProduct);
router.put('/:productId', productControllers.updateProduct);
router.delete('/:productId', productControllers.deleteProduct);

export const productRouts = router;