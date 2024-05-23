import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRouts } from './app/modules/product/product.route';
import { orderRoutes } from './app/modules/order/order.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', productRouts);
app.use('/api/orders', orderRoutes);
app.use('/', (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      message: 'welcome to e-commerce server',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Route not found',
      error: err,
    });
  }
});

export default app;
