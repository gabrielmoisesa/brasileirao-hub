import { ITeam } from '../Interfaces/teams/ITeam';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import TeamModel from '../models/TeamModel';
import { ServiceResponse } from '../types/ServiceResponse';

export default class TeamService {
  constructor(private teamModel: ITeamModel = new TeamModel()) {}

  public async getAll(): Promise<ServiceResponse<ITeam[]>> {
    const teams = await this.teamModel.findAll();
    return { status: 'OK', data: teams };
  }

  public async getById(id: number): Promise<ServiceResponse<ITeam | null>> {
    const team = await this.teamModel.findById(id);
    return { status: 'OK', data: team };
  }
}
