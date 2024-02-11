import { Request, Response } from 'express';
import httpMap from '../utils/httpMap';
import MatchService from '../services/MatchService';

export default class MatchController {
  constructor(private matchService = new MatchService()) {}

  public async getAll(req: Request, res: Response) {
    const { status, data } = await this.matchService.getAll();
    res.status(httpMap(status)).json(data);
  }
}
