import { Router } from 'express';
import productController from '../controllers/productController';
// import productValidator from '../middleware/productValidator'; 

const productRouter = Router();

productRouter.post('/products', productController.create);
productRouter.get('/products', productController.getAll);

export default productRouter;