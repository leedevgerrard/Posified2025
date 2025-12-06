import mongoose from "mongoose";
import createHttpError from "http-errors";

import Product from "../models/Product.js";

export const addProduct = async (req, res, next) => {
  try {
    const { name, category, price, imageURL } = req.body;
    if (!name || !category || !price) {
      const error = createHttpError(400, 'Product details are not complete!');
      return next(error);
    }

    const product = new Product(req.body);
    await product.save();

    res.status(201).json({
      success: true,
      message: 'New product added!',
      data: product
    })
  } catch (error) {
    next(error);
  }
}

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    
    res.status(200).json({
      success: true,
      data: products
    })
  } catch (error) {
    next(error);
  }
}

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = createHttpError(404, 'Invalid ID!');
      return next(error);
    }

    const product = await Product.findById(id);
    if (!product) {
      const error = createHttpError(404, 'Product not found!');
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: product
    })
  } catch (error) {
    next(error);
  }
}

export const getProductByCategoryId = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    if (!categoryId || !mongoose.Types.ObjectId.isValid(categoryId)) {
      const error = createHttpError(404, 'Invalid ID!');
      return next(error);
    }

    const product = await Product.find({ category: categoryId });
    if (!product) {
      const error = createHttpError(404, 'Product not found!');
      return next(error);
    }

    res.status(200).json({
      success: true,
      data: product
    })
  } catch (error) {
    next(error);
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = createHttpError(404, 'Invalid ID!');
      return next(error);
    }

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      const error = createHttpError(404, 'Product not found!');
      return next(error);
    }

    res.status(200).json({
      success: true,
      message: 'Product deleted',
      data: product
    })
  } catch (error) {
    next(error);
  }
}