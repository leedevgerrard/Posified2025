import bcrypt from 'bcrypt';
import User from '../models/User.js';
import createHttpError from 'http-errors';

export const requireManagerPin = async (req, res, next) => {
  try {
    const { pin } = req.body;
    if (!pin) {
      const error = createHttpError(401, 'Invalid PIN!');
      return next(error);
    }

    const admin = await User.findOne({ role: 'Admin' });
    if (!admin || !admin.managerPin) {
      const error = createHttpError(403, 'Authorization failed!');
      return next(error);
    }

    const isMatch = await bcrypt.compare(pin, admin.managerPin);
    if (!isMatch) {
      const error = createHttpError(403, 'Authorization failed!');
      return next(error);
    }

    next();
  } catch (error) {
    const err = createHttpError(401, 'Authorization failed 3!');
    next(err);
  }
}