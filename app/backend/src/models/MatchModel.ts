import { IMatch } from '../Interfaces/matches/IMatch';
import SMatchModel from '../database/models/SMatchModel';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import STeamModel from '../database/models/STeamModel';

export default class MatchModel implements IMatchModel {
  private model = SMatchModel;

  async findAll(): Promise<IMatch[]> {
    const matches = this.model.findAll({
      include: [
        {
          model: STeamModel,
          as: 'homeTeam',
          foreignKey: 'homeTeamId',
          attributes: ['teamName'],
        },
        {
          model: STeamModel,
          as: 'awayTeam',
          foreignKey: 'awayTeamId',
          attributes: ['teamName'],
        },
      ],
    });

    return matches;
  }
}
