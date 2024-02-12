import { ServiceResponse, message } from '../types/ServiceResponse';
import { IMatchModel, NewMatch } from '../Interfaces/matches/IMatchModel';
import MatchModel from '../models/MatchModel';
import { IMatch } from '../Interfaces/matches/IMatch';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import TeamModel from '../models/TeamModel';

export default class MatchService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
    private teamModel: ITeamModel = new TeamModel(),
  ) {}

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
    if (data.homeTeamId === data.awayTeamId) {
      return {
        status: 'UNPROCESSABLE_ENTITY',
        data: {
          message: 'It is not possible to create a match with two equal teams',
        },
      };
    }

    const homeTeam = await this.teamModel.findById(data.homeTeamId);
    const awayTeam = await this.teamModel.findById(data.awayTeamId);
    if (!homeTeam || !awayTeam) {
      return {
        status: 'NOT_FOUND',
        data: { message: 'There is no team with such id!' },
      };
    }

    const newMatch = await this.matchModel.create(data);
    return { status: 'CREATED', data: newMatch };
  }
}
