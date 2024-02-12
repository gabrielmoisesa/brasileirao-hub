import { IMatch } from '../../Interfaces/matches/IMatch';
import { ServiceResponse } from '../../types/ServiceResponse';
import { ILeaderboard } from '../../Interfaces/leaderboard/ILeaderboard';
import { IMatchModel } from '../../Interfaces/matches/IMatchModel';
import { ITeamModel } from '../../Interfaces/teams/ITeamModel';
import MatchModel from '../../models/MatchModel';
import TeamModel from '../../models/TeamModel';
import LeaderboardService from './LeaderboardService';

export default class HomeService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
    private teamModel: ITeamModel = new TeamModel(),
  ) {}

  private static getHomeTeamMatches(teamId: number, matches: IMatch[]): IMatch[] {
    return matches.filter((match) => match.homeTeamId === teamId);
  }

  public async getAll(): Promise<ServiceResponse<ILeaderboard[]>> {
    const matches = await this.matchModel.findAll();
    const teams = await this.teamModel.findAll();

    const leaderboard = teams.map((team) => {
      const teamMatches = HomeService.getHomeTeamMatches(team.id, matches);
      const totalGVDL = LeaderboardService.getTotalGVDL(team.id, teamMatches);
      const totalPoints = LeaderboardService
        .calculateTotalPoints(totalGVDL.totalVictories, totalGVDL.totalDraws);
      const goalsFavorAndOwn = LeaderboardService.getGoalsFavorAndOwn(team.id, teamMatches);

      return {
        name: team.teamName,
        totalPoints,
        ...totalGVDL,
        ...goalsFavorAndOwn,
      };
    });

    return { status: 'OK', data: leaderboard };
  }
}
