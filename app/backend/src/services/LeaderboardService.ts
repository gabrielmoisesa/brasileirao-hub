import MatchModel from '../models/MatchModel';
import TeamModel from '../models/TeamModel';
import { ITeamModel } from '../Interfaces/teams/ITeamModel';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import { IMatch } from '../Interfaces/matches/IMatch';
import { ServiceResponse } from '../types/ServiceResponse';
import { ILeaderboard } from '../Interfaces/leaderboard/ILeaderboard';

export default class LeaderboardService {
  constructor(
    private matchModel: IMatchModel = new MatchModel(),
    private teamModel: ITeamModel = new TeamModel(),
  ) {}

  public async getAllHome(): Promise<ServiceResponse<ILeaderboard[]>> {
    const matches = LeaderboardService.getFinishedMatches(await this.matchModel.findAll());
    const teams = await this.teamModel.findAll();

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

  private static getFinishedMatches(matches: IMatch[]): IMatch[] {
    return matches.filter((match) => match.inProgress === false);
  }

  private static getTeamMatches(
    teamId: number,
    matches: IMatch[],
    type?: 'home' | 'away',
  ): IMatch[] {
    if (type === 'home') {
      return matches.filter((match) => match.homeTeamId === teamId);
    }
    if (type === 'away') {
      return matches.filter((match) => match.awayTeamId === teamId);
    }
    return matches.filter((match) => match.homeTeamId === teamId || match.awayTeamId === teamId);
  }

  private static getTotalGVDL(
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

  private static getGoalsFavorAndOwn(teamId: number, teamMatches: IMatch[]):
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
    teamVictories: number,
    teamDraws: number,
  ): number {
    return totalGames - teamVictories - teamDraws;
  }

  private static calculateTotalPoints(wins: number, draws: number): number {
    return wins * 3 + draws;
  }

  private static calculateGoalsScored(teamId: number, teamMatches: IMatch[]): number {
    return teamMatches.reduce((acc, match) => {
      if (match.homeTeamId === teamId) {
        return acc + match.homeTeamGoals;
      }
      return acc + match.awayTeamGoals;
    }, 0);
  }

  private static calculateGoalsConceded(teamId: number, teamMatches: IMatch[]): number {
    return teamMatches.reduce((acc, match) => {
      if (match.homeTeamId === teamId) {
        return acc + match.awayTeamGoals;
      }
      return acc + match.homeTeamGoals;
    }, 0);
  }
}
