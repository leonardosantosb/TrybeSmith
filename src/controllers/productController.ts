import { Request, Response } from 'express';
import serviceProducts from '../services/serviceProducts';

async function create(req: Request, res: Response): Promise<Response> {
  const { body } = req;
  const newProduct = await serviceProducts.create(body);
  return res.status(201).json(newProduct);
}

async function getAll(req: Request, res: Response): Promise<Response> {
  const getAllProducts = await serviceProducts.getAll();
  return res.status(200).json(getAllProducts);
}

export default {
  create,
  getAll,
};