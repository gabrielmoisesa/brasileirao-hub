import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';
import httpMap from '../utils/httpMap';

export default class LeaderboardController {
  constructor(private leaderboardService = new LeaderboardService()) {}

  public async getAll(req: Request, res: Response) {
    const type = req.url.split('/')[1] as 'home' | 'away';
    const { status, data } = await this.leaderboardService.getAll(type);
    res.status(httpMap(status)).json(data);
  }
}
