import { ITeams } from '../Interfaces/teams/ITeams';
import STeamModel from '../database/models/STeamModel';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';

export default class TeamModel implements ITeamModel {
  private model = STeamModel;

  async findAll(): Promise<ITeams[]> {
    const data = await this.model.findAll();
    return data.map(({ id, teamName }) => ({ id, teamName }));
  }
}
