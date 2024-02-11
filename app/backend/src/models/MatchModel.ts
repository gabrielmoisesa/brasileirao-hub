import { IMatch } from '../Interfaces/matches/IMatch';
import SMatchModel from '../database/models/SMatchModel';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';

export default class MatchModel implements IMatchModel {
  private model = SMatchModel;

  async findAll(): Promise<IMatch[]> {
    const data = await this.model.findAll();
    return data.map(
      ({
        id,
        homeTeamId,
        homeTeamGoals,
        awayTeamId,
        awayTeamGoals,
        inProgress,
      }) => ({
        id,
        homeTeamId,
        homeTeamGoals,
        awayTeamId,
        awayTeamGoals,
        inProgress,
      }),
    );
  }
}
