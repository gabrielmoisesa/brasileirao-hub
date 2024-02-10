import { Request, Response } from 'express';
import httpMap from '../utils/httpMap';
import LoginService from '../services/LoginService';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  public async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const { status, data } = await this.loginService.login(email, password);
    res.status(httpMap(status)).json(data);
  }
}
