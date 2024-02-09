import { ITeam } from '../Interfaces/teams/ITeam';
import STeamModel from '../database/models/STeamModel';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';

export default class TeamModel implements ITeamModel {
  private model = STeamModel;

  async findAll(): Promise<ITeam[]> {
    const data = await this.model.findAll();
    return data.map(({ id, teamName }) => ({ id, teamName }));
  }

  async findById(id: number): Promise<ITeam | null> {
    const data = await this.model.findByPk(id);
    if (!data) return null;
    return { id: data.id, teamName: data.teamName };
  }
}
