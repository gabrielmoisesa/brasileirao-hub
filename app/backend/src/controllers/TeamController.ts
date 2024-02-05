import { Request, Response } from 'express';
import httpMap from '../utils/httpMap';
import TeamService from '../services/TeamService';

export default class TeamController {
  constructor(private teamService = new TeamService()) {}

  public async getAll(req: Request, res: Response) {
    const { status, data } = await this.teamService.getAll();
    res.status(httpMap(status)).json(data);
  }
}
