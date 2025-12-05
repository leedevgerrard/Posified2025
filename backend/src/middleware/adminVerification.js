import createHttpError from "http-errors";

export const isAdmin = (req, res, next) => {
  try {
    const { role } = req.user;
    if (role !== 'Admin') {
      const error = createHttpError(403, 'Forbidden!');
      return next(error);
    }

    next();
  } catch (error) {
    const err = createHttpError(403, 'Forbidden!');
    next(err);
  }
}