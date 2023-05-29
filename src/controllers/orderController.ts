import { Request, Response } from 'express';
import serviceOrders from '../services/serviceOrders';

async function getAll(req: Request, res: Response): Promise<Response> {
  const getAllOrders = await serviceOrders.getAll();
  return res.status(200).json(getAllOrders);
}

export default {
  getAll,
};