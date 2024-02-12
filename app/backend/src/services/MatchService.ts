import { ServiceResponse, message } from '../types/ServiceResponse';
import { IMatchModel, NewMatch } from '../Interfaces/matches/IMatchModel';
import MatchModel from '../models/MatchModel';
import { IMatch } from '../Interfaces/matches/IMatch';

export default class MatchService {
  constructor(private matchModel: IMatchModel = new MatchModel()) {}

  public async getAll(inProgress?: string): Promise<ServiceResponse<IMatch[]>> {
    const matches = await this.matchModel.findAll();
    if (inProgress === 'true' || inProgress === 'false') {
      return {
        status: 'OK',
        data: matches.filter(
          (match) => match.inProgress === JSON.parse(inProgress),
        ),
      };
    }
    return { status: 'OK', data: matches };
  }

  public async finishMatch(id: number): Promise<ServiceResponse<message>> {
    const updated = await this.matchModel.updateMatchProgress(id);
    return {
      status: updated ? 'OK' : 'BAD_REQUEST',
      data: { message: updated ? 'Finished' : 'Failed' },
    };
  }

  public async updateScore(
    id: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<ServiceResponse<message>> {
    const updated = await this.matchModel.updateMatchScore(
      id,
      homeTeamGoals,
      awayTeamGoals,
    );
    return {
      status: updated ? 'OK' : 'BAD_REQUEST',
      data: { message: updated ? 'Updated' : 'Failed' },
    };
  }

  public async create(data: NewMatch): Promise<ServiceResponse<IMatch>> {
    const newMatch = await this.matchModel.create(data);
    return { status: 'CREATED', data: newMatch };
  }
}
