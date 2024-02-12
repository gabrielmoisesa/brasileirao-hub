import MatchModel from '../../models/MatchModel';
import TeamModel from '../../models/TeamModel';
import { ITeamModel } from '../../Interfaces/teams/ITeamModel';
import { IMatchModel } from '../../Interfaces/matches/IMatchModel';
import { IMatch } from '../../Interfaces/matches/IMatch';

export default class LeaderboardService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
    private teamModel: ITeamModel = new TeamModel(),
  ) {}

  private static getTeamMatches(teamId: number, matches: IMatch[]): IMatch[] {
    return matches.filter(
      (match) => match.homeTeamId === teamId || match.awayTeamId === teamId,
    );
  }

  private static calculateTotalGames(teamMatches: IMatch[]): number {
    return teamMatches.length;
  }

  private static calculateTotalVictories(
    teamId: number,
    teamMatches: IMatch[],
  ): number {
    return teamMatches.filter((match) => {
      if (match.homeTeamId === teamId) {
        return match.homeTeamGoals > match.awayTeamGoals;
      }
      return match.awayTeamGoals > match.homeTeamGoals;
    }).length;
  }

  private static calculateTotalDraws(teamMatches: IMatch[]): number {
    return teamMatches.filter(
      (match) => match.homeTeamGoals === match.awayTeamGoals,
    ).length;
  }

  private static calculateTotalLosses(
    totalGames: number,
    teamWins: number,
    teamDraws: number,
  ): number {
    return totalGames - teamWins - teamDraws;
  }

  private static calculateTotalPoints(wins: number, draws: number): number {
    return wins * 3 + draws;
  }
}
