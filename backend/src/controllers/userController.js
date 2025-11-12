import createHttpError from "http-errors";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, phone, password, passwordValidator, role } = req.body;

    if (!name || !email || !phone || !password || !confirmPassword || !role) {
      const error = createHttpError(400, 'All fields are required!');
      return next(error);
    }

    const isUserPresent = await User.findOne({email});
    if (isUserPresent) {
      const error = createHttpError(400, 'Email has already registered!');
      return next(error);
    }

    if (password != confirmPassword) {
      const error = createHttpError(400, 'Passwords do not match!');
      return next(error);
    }

    const newUser = User({name, email, phone, password, role});
    await newUser.save();

    res.status(201).json({
      success: true,
      message: 'User has successfully registered!',
      data: newUser
    });
  } catch (error) {
    next(error);
  }
}

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = createHttpError(400, 'All fields are required!');
      return next(error);
    }

    const isUserPresent = await User.findOne({email});
    if (!isUserPresent) {
      const error = createHttpError(401, 'Invalid credentials!');
      return next(error);
    }

    const isMatch = await bcrypt.compare(password, isUserPresent.password);
    if (!isMatch) {
      const error = createHttpError(401, 'Invalid credentials!');
      return next(error);
    }

    const accessToken = jwt.sign({_id: isUserPresent._id}, config.accessTokenSecret, {
      expiresIn: '1d'
    })

    res.cookie('accessToken', accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: 'none',
      secure: true
    })

    res.status(200).json({
      success: true,
      message: 'User has successfully login!',
      data: isUserPresent
    })
  } catch (error) {
    next(error);
  }
}