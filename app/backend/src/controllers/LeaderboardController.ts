import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';
import httpMap from '../utils/httpMap';

export default class LeaderboardController {
  constructor(private leaderboardService = new LeaderboardService()) {}

  public async getAll(req: Request, res: Response) {
    const url = req.url.split('/')[1];
    const type = url === 'home' || url === 'away' ? url : undefined;
    const { status, data } = await this.leaderboardService.getAll(type);
    res.status(httpMap(status)).json(data);
  }
}
