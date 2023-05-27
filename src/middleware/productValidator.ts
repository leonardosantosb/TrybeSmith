import { NextFunction, Request, Response } from 'express';

function createValidator(req: Request, res: Response, next: NextFunction): Response | void {
  const { name, price, orderId } = req.body;
  if (!name) {
    return res.status(422).json({ message: 'Name is Required' });
  }
  if (!price) {
    return res.status(422).json({ message: 'Price is Required' });
  }
  if (!orderId) {
    return res.status(422).json({ message: 'OrderId is Required' });
  }
  return next();
}

export default {
  createValidator,
};