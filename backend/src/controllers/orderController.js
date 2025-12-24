import mongoose from "mongoose";
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
    const orders = await Order.find({ status: 'ongoing' });

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
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = createHttpError(404, 'Invalid ID!');
      return next(error);
    }

    const order = await Order.findById(id);
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

export const updateOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = createHttpError(404, 'Invalid ID!');
      return next(error);
    }

    const newOrder = await Order.findByIdAndUpdate(id, order, { new: true });
    if (!newOrder) {
      const error = createHttpError(404, 'Order not found!');
      return next(error);
    }

    res.status(200).json({
      success: true,
      message: 'Order added!',
      data: newOrder
    })
  } catch (error) {
    next(error);
  }
}

export const updateOrderStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = createHttpError(404, 'Invalid ID!');
      return next(error);
    }

    const updatedOrder = await Order.findByIdAndUpdate(id,
      { $set: { status } },
      { new: true });
    if (!updatedOrder) {
      const error = createHttpError(404, 'Order not found!');
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: updatedOrder
    })
  } catch (error) {
    next(error);
  }
}