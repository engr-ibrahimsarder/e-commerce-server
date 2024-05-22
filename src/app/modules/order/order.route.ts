import express from 'express';
import { orderControllers } from './order.controller';
const router = express.Router();

router.post('/create-order', orderControllers.createNewOrder);
router.get('/', orderControllers.getAllOrder);

export const orderRoutes = router;
