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

  static getTeamMatches(teamId: number, matches: IMatch[]): IMatch[] {
    return matches.filter(
      (match) => match.homeTeamId === teamId || match.awayTeamId === teamId,
    );
  }

  static getTotalGVDL(
    teamId: number,
    teamMatches: IMatch[],
  ): { totalGames: number; totalVictories: number; totalDraws: number; totalLosses: number } {
    const totalGames = LeaderboardService.calculateTotalGames(teamMatches);
    const totalVictories = LeaderboardService.calculateTotalVictories(
      teamId,
      teamMatches,
    );
    const totalDraws = LeaderboardService.calculateTotalDraws(teamMatches);
    const totalLosses = LeaderboardService.calculateTotalLosses(
      totalGames,
      totalVictories,
      totalDraws,
    );
    return { totalGames, totalVictories, totalDraws, totalLosses };
  }

  static getGoalsFavorAndOwn(teamId: number, teamMatches: IMatch[]):
  { goalsFavor: number; goalsOwn: number } {
    const goalsFavor = LeaderboardService.calculateGoalsScored(
      teamId,
      teamMatches,
    );
    const goalsOwn = LeaderboardService.calculateGoalsConceded(
      teamId,
      teamMatches,
    );
    return { goalsFavor, goalsOwn };
  }

  static calculateTotalGames(teamMatches: IMatch[]): number {
    return teamMatches.length;
  }

  static calculateTotalVictories(
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

  static calculateTotalDraws(teamMatches: IMatch[]): number {
    return teamMatches.filter(
      (match) => match.homeTeamGoals === match.awayTeamGoals,
    ).length;
  }

  static calculateTotalLosses(
    totalGames: number,
    teamVictories: number,
    teamDraws: number,
  ): number {
    return totalGames - teamVictories - teamDraws;
  }

  static calculateTotalPoints(wins: number, draws: number): number {
    return wins * 3 + draws;
  }

  static calculateGoalsScored(teamId: number, teamMatches: IMatch[]): number {
    return teamMatches.reduce((acc, match) => {
      if (match.homeTeamId === teamId) {
        return acc + match.homeTeamGoals;
      }
      return acc + match.awayTeamGoals;
    }, 0);
  }

  static calculateGoalsConceded(teamId: number, teamMatches: IMatch[]): number {
    return teamMatches.reduce((acc, match) => {
      if (match.homeTeamId === teamId) {
        return acc + match.awayTeamGoals;
      }
      return acc + match.homeTeamGoals;
    }, 0);
  }
}
