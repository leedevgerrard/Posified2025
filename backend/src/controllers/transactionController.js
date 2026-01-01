import mongoose from 'mongoose';
import Transaction from '../models/Transaction.js';
import createHttpError from 'http-errors';

export const addTransaction = async (req, res, next) => {
  try {
    const transaction = Transaction(req.body);

    const { customerName, items, bills, payment } = transaction;
    if (!customerName || !items || !bills || !payment) {
      const error = createHttpError(400, 'Incomplete data!');
      return next(error);
    }

    if (payment.paymentMethod != 'Cash' && payment.paymentMethod != 'Transfer' && payment.paymentMethod != 'QRIS') {
      const error = createHttpError(400, 'Invalid payment method!');
      return next(error);
    }

    if (payment.paidAmount < bills.totalAfterTax) {
      const error = createHttpError(400, 'Invalid payment amount!');
      return next(error);
    }

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
      data: transactions
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

export const getTodaysTransactions = async (req, res, next) => {
  try {
    const now = new Date();

    // WIB offset = +7 jam
    const startOfDay = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        -7, 0, 0, 0
      )
    )

    const endOfDay = new Date(
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        16, 59, 59, 999
      )
    )

    const orders = await Transaction.find({
      createdAt: {
        $gte: startOfDay,
        $lte: endOfDay
      }
    })
    if (!orders) {
      orders = [];
    }

    res.status(200).json({
      success: true,
      data: orders
    })
  } catch (error) {
    next(error);
  }
}