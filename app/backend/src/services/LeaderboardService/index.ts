import { IMatch } from '../../Interfaces/matches/IMatch';
import { ServiceResponse } from '../../types/ServiceResponse';
import { ILeaderboard } from '../../Interfaces/leaderboard/ILeaderboard';
import MatchService from '../MatchService';
import TeamService from '../TeamService';
import { ITeam } from '../../Interfaces/teams/ITeam';

export default class LeaderboardService {
  constructor(
    private matchService = new MatchService(),
    private teamService = new TeamService(),
  ) {}

  public async getAllHome(): Promise<ServiceResponse<ILeaderboard[]>> {
    const matches = (await this.matchService.getAll('false')).data as IMatch[];
    const teams = (await this.teamService.getAll()).data as ITeam[];

    const leaderboard = teams.map((team) => {
      const teamMatches = LeaderboardService.getTeamMatches(team.id, matches, 'home');
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
