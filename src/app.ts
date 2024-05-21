import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRouts } from './app/modules/product/product.route';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', productRouts);
app.use('/', (req: Request, res: Response) => {
  res.send('welcome to e-commerce server');
});

export default app;
