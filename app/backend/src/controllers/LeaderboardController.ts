import { Request, Response } from 'express';
import httpMap from '../utils/httpMap';
import HomeService from '../services/leaderboard/HomeService';

export default class LeaderboardController {
  constructor(private homeService = new HomeService()) {}

  public async getAllHome(req: Request, res: Response) {
    const { status, data } = await this.homeService.getAll();
    res.status(httpMap(status)).json(data);
  }
}
