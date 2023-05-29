import OrderModel from '../database/models/order.model';

import Product from '../database/models/product.model';
// import { Order } from '../types/Order';

async function getAll(): Promise<unknown> {
  const getOrder = await OrderModel.findAll({
    include: [
      { model: Product, as: 'productIds', attributes: ['id'] },
    ], 
  });
  return getOrder;
}

export default {
  getAll,
};