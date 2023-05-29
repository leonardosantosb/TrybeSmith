import express from 'express';
import orderRouter from './Routes/orderRouter';
import productRouter from './Routes/productRouter';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(orderRouter);

export default app;
