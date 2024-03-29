import { IMatch } from '../Interfaces/matches/IMatch';
import SMatchModel from '../database/models/SMatchModel';
import { IMatchModel, NewMatch } from '../Interfaces/matches/IMatchModel';
import STeamModel from '../database/models/STeamModel';

export default class MatchModel implements IMatchModel {
  private model = SMatchModel;
  private teamModel = STeamModel;

  async findAll(): Promise<IMatch[]> {
    const matches = this.model.findAll({
      include: [
        {
          model: this.teamModel,
          as: 'homeTeam',
          foreignKey: 'homeTeamId',
          attributes: ['teamName'],
        },
        {
          model: this.teamModel,
          as: 'awayTeam',
          foreignKey: 'awayTeamId',
          attributes: ['teamName'],
        },
      ],
      order: [['id', 'DESC']],
    });

    return matches;
  }

  async updateMatchProgress(id: number): Promise<boolean> {
    const updatedMatch = await this.model.update(
      { inProgress: false },
      { where: { id } },
    );
    return updatedMatch[0] === 1;
  }

  async updateMatchScore(
    id: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ): Promise<boolean> {
    const updatedMatch = await this.model.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );

    return updatedMatch[0] === 1;
  }

  create(data: NewMatch): Promise<IMatch> {
    const newMatch = this.model.create({ ...data, inProgress: true });
    return newMatch;
  }
}
