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

  public async finishMatch(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { status, data } = await this.matchService.finishMatch(id);
    res.status(httpMap(status)).json(data);
  }

  public async updateScore(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { status, data } = await this.matchService.updateScore(id, homeTeamGoals, awayTeamGoals);
    res.status(httpMap(status)).json(data);
  }

  public async create(req: Request, res: Response) {
    const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;
    const body = { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals };
    const { status, data } = await this.matchService.create(body);
    res.status(httpMap(status)).json(data);
  }
}
