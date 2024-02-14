import { Request, Response, NextFunction } from 'express';
import ICustomError from '../Interfaces/ICustomError';

export default class ErrorMiddleware {
  public static handle(error: ICustomError, _req: Request, res: Response, _next: NextFunction) {
    const status = error.statusCode || 500;
    const message = error.message || 'Something went wrong';

    console.log(error);
    return res.status(status).json({ message });
  }
}
