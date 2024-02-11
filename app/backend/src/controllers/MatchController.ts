import { Request, Response } from 'express';
import httpMap from '../utils/httpMap';
import MatchService from '../services/MatchService';

export default class MatchController {
  constructor(private matchService = new MatchService()) {}

  public async getAll(req: Request, res: Response) {
    const inProgress = typeof req.query.inProgress === 'string' ? req.query.inProgress : undefined;
    const { status, data } = await this.matchService.getAll(inProgress);
    res.status(httpMap(status)).json(data);
  }
}
