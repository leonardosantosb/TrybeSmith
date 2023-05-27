import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

async function create(product: ProductInputtableTypes): Promise<Product> {
  const newProduct = await ProductModel.create(product);
  return newProduct.dataValues;
}

async function getAll(): Promise<unknown> {
  const getProducts = await ProductModel.findAll();
  return getProducts;
}

export default {
  create,
  getAll,
};