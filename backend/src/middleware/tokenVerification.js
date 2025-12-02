import createHttpError from 'http-errors';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import User from '../models/User.js';

export const isVerfiedUser = async (req, res, next) => {
  try {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      const error = createHttpError(401, 'Token not found!');
      return next(error);
    }

    const decodedToken = jwt.verify(accessToken, config.accessTokenSecret);
    
    const user = await User.findById(decodedToken._id);
    if (!user) {
      const error = createHttpError(401, 'User not found!');
      return next(error);
    }

    req.user = user;
    next();
  } catch (error) {
    const err = createHttpError(401, 'Invalid token!');
    next(err);
  }
}