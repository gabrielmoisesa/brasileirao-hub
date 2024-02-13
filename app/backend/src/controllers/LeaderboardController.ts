import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';
import httpMap from '../utils/httpMap';

export default class LeaderboardController {
  constructor(private leaderboardService = new LeaderboardService()) {}

  public async getAllHome(req: Request, res: Response) {
    const { status, data } = await this.leaderboardService.getAll('home');
    res.status(httpMap(status)).json(data);
  }
}
