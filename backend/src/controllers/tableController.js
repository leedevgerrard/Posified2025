import createHttpError from "http-errors";

import Table from "../models/Table.js";

export const addTable = async (req, res, next) => {
  try {
    const { tableNum } = req.body;
    if (!tableNum) {
      const error = createHttpError(400, 'Please provide table number!');
      return next(error);
    }

    const isTablePresent = await Table.findOne({tableNum});
    if (isTablePresent) {
      const error = createHttpError(400, 'Table already exists!');
      return next(error);
    }

    const table = new Table({tableNum});
    await table.save();

    res.status(201).json({
      success: true,
      message: 'Table added!',
      data: table
    })
  } catch (error) {
    next(error);
  }
}

export const getAllTables = async (req, res, next) => {
  try {
    const tables = await Table.find();
    
    res.status(200).json({
      success: true,
      data: tables
    })
  } catch (error) {
    next(error);
  }
}

export const updateTable = async (req, res, next) => {
  try {
    const { status, orderId } = req.body;
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      const error = createHttpError(404, 'Invalid order ID!');
      return next(error);
    }
    
    const updatedTable = await Table.findByIdAndUpdate(
      req.params.id,
      { status, currentOrder: orderId },
      { new: true }
    )
    if (!updatedTable) {
      const error = createHttpError(404, 'Table not found!');
      return next(error);
    }

    res.status(200).json({
      success: true,
      message: 'Table updated!',
      data: updatedTable
    })
  } catch (error) {
    next(error);
  }
}

export const deleteTable = async (req, res, next) => {
  try {
    const { tableNum } = req.params;
    if (!tableNum) {
      const error = createHttpError(400, 'Please provide table number!');
      return next(error);
    }

    const deletedTable = await Table.findOneAndDelete({ tableNum });
    if (!deletedTable) {
      const error = createHttpError(404, "Table doesn't exist!");
      return next(error);
    }

    res.status(200).json({
      success: true,
      message: 'Table successfully removed!',
      data: deletedTable
    })
  } catch (error) {
    next(error);
  }
}