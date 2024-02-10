import { NextFunction, Request, Response } from 'express';
import loginSchema, { invalidFormatMessage } from './schemas/login.schema';

export default class LoginMiddleware {
  static validateBody(req: Request, res: Response, next: NextFunction) {
    const { error } = loginSchema.body.validate(req.body);
    if (error) {
      const statusCode = error.message === invalidFormatMessage ? 401 : 400;
      return res.status(statusCode).json({ message: error.message });
    }
    next();
  }
}
