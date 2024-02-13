import { IMatch } from '../../Interfaces/matches/IMatch';
import { ServiceResponse } from '../../types/ServiceResponse';
import { ILeaderboard } from '../../Interfaces/leaderboard/ILeaderboard';
import MatchService from '../MatchService';
import TeamService from '../TeamService';
import { ITeam } from '../../Interfaces/teams/ITeam';
import LeaderboardCalculator from './LeaderboardCalculator';

export default class LeaderboardService {
  constructor(
    private matchService = new MatchService(),
    private teamService = new TeamService(),
  ) {}

  public async getAll(type?: 'home' | 'away'): Promise<ServiceResponse<ILeaderboard[]>> {
    const matches = (await this.matchService.getAll('false')).data as IMatch[];
    const teams = (await this.teamService.getAll()).data as ITeam[];

    const leaderboard = LeaderboardCalculator.calculate(teams, matches, type);

    return { status: 'OK', data: leaderboard };
  }
}
