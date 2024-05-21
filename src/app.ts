import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/', (req: Request, res: Response) => {
    res.send('welcome to e-commerce server')
    // res.status(200).json({
    //     success: true,
    //     message: 'Welcome to e-commerce server'
    // })
});

export default app;
