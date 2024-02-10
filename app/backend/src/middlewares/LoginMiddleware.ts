import { NextFunction, Request, Response } from 'express';
import loginSchema from './schemas/login.schema';

export default class LoginMiddleware {
  static validateBody(req: Request, res: Response, next: NextFunction) {
    const { error } = loginSchema.body.validate(req.body);
    if (error) return res.status(400).json({ message: 'All fields must be filled' });
    next();
  }
}
