import createHttpError from "http-errors";

import Order from "../models/Order.js";

export const addOrder = async (req, res, next) => {
  try {
    const order = Order(req.body);
    await order.save();

    res.status(201).json({
      success: true,
      message: 'Order added!',
      data: order
    })
  } catch (error) {
    next(error);
  }
}

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();

    res.status(200).json({
      success: true,
      data: orders
    })
  } catch (error) {
    next(error);
  }
}

export const getOrderById = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      const error = createHttpError(404, 'Order not found!');
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: order
    })
  } catch (error) {
    next(error); 
  }
}