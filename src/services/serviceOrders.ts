import { Product } from 'src/types/Product';
import OrderModel from '../database/models/order.model';

import productModel from '../database/models/product.model';

async function getAll(): Promise<unknown> {
  const getOrder = await OrderModel.findAll({
    include: [
      { model: productModel, as: 'productIds', attributes: ['id'] },
    ], 
  });
  return getOrder.map((order) => {
    const { id, userId, productIds } = order.toJSON();
    const formatando = (productIds as Product[] | undefined)
      ?.map((product) => product.id) || [];
    return { id, userId, productIds: formatando };
  });
  // return jeitoCerto;
}

export default {
  getAll,
};