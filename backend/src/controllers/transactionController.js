import mongoose from 'mongoose';
import Transaction from '../models/Transaction';
import createHttpError from 'http-errors';

export const addTransaction = async (req, res, next) => {
  try {
    const transaction = Transaction(req.body);
    await transaction.save();

    res.status(201).json({
      success: true,
      message: 'Payment successfull!',
      data: transaction
    })
  } catch (error) {
    next(error);
  }
}

export const getAllTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    res.status(200).json({
      status: 'success',
      data: orders
    })
  } catch (error) {
    next(error);
  }
}

export const getTransactionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = createHttpError(404, 'Invalid ID!');
      return next(error);
    }

    const transaction = await Transaction.findById(id);
    if (!transaction) {
      const error = createHttpError(404, 'Transaction history not found!');
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: transaction
    })
  } catch (error) {
    next(error);
  }
}