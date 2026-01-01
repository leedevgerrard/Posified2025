import mongoose from "mongoose";
import createHttpError from "http-errors";

import Category from "../models/Category.js";

export const addCategory = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    if (!name || !slug) {
      const error = createHttpError(400, 'Categoy details are not complete!');
      return next(error);
    }

    const category = new Category(req.body);
    await category.save();

    res.status(201).json({
      success: true,
      message: 'New category added!',
      data: category
    })
  } catch (error) {
    next(error);
  }
}

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      success: true,
      data: categories
    })
  } catch (error) {
    next(error);
  }
}

export const deleteCategory = async (req, res, next) => {
  try {
    const { categorySlug } = req.params;
    if (!categorySlug) {
      const error = createHttpError(400, 'Please provide category name!');
      return next(error);
    }

    const deletedCategory = await Category.findOneAndDelete({ slug: categorySlug });
    if (!deletedCategory) {
      const error = createHttpError(404, "Category doesn't exist!");
      return next(error);
    }

    res.status(200).json({
      success: true,
      message: 'Category successfully removed!',
      data: deletedCategory
    })
  } catch (error) {
    next(error);
  }
}