import { NextFunction, Request, Response } from 'express';
import { IUserModel } from '../Interfaces/users/IUserModel';
import UserModel from '../models/UserModel';
import jwtUtil from '../utils/jwt.util';

export default class AuthMiddleware {
  constructor(private userModel: IUserModel = new UserModel()) {}

  static extractToken(authorization: string) {
    return authorization.split(' ')[1];
  }

  async auth(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const token = AuthMiddleware.extractToken(authorization);

    try {
      const decoded = jwtUtil.verify(token);
      const user = await this.userModel.findById(decoded.id);
      if (!user) return res.status(401).json({ message: 'Token must be a valid token' });
      res.locals.auth = decoded;
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}
