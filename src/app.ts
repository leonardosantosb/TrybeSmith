import express from 'express';
import loginRouter from './Routes/loginRouter';
import orderRouter from './Routes/orderRouter';
import productRouter from './Routes/productRouter';

const app = express();

app.use(express.json());

app.use(productRouter);
app.use(orderRouter);
app.use(loginRouter);

export default app;
