import { NextFunction, Request, Response } from 'express';
import jwtUtil from '../utils/jwt.util';

export default class AuthMiddleware {
  static extractToken(authorization: string) {
    return authorization.split(' ')[1];
  }

  static async auth(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const token = AuthMiddleware.extractToken(authorization);

    try {
      const payload = jwtUtil.verify(token);
      res.locals.auth = payload;
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}
