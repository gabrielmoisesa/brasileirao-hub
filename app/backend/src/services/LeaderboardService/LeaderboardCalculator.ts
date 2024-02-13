import { ILeaderboard } from '../../Interfaces/leaderboard/ILeaderboard';
import { IMatch } from '../../Interfaces/matches/IMatch';
import { ITeam } from '../../Interfaces/teams/ITeam';

export default class LeaderboardCalculator {
  public static calculate(
    teams: ITeam[],
    matches: IMatch[],
    type?: 'home' | 'away',
  ): ILeaderboard[] {
    return teams.map((team) => {
      const teamMatches = LeaderboardCalculator.getTeamMatches(team.id, matches, type);
      const totalResults = LeaderboardCalculator.getTotalResults(team.id, teamMatches);
      const goalsFavorAndOwn = LeaderboardCalculator.getGoalsFavorAndOwn(team.id, teamMatches);

      return {
        name: team.teamName,
        ...totalResults,
        ...goalsFavorAndOwn,
      };
    });
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

  private static getTotalResults(
    teamId: number,
    teamMatches: IMatch[],
  ): Omit<ILeaderboard, 'name' | 'goalsFavor' | 'goalsOwn'> {
    const totalGVDL = LeaderboardCalculator.getTotalGVDL(teamId, teamMatches);
    const totalPoints = LeaderboardCalculator.calculateTotalPoints(
      totalGVDL.totalVictories,
      totalGVDL.totalDraws,
    );
    return { totalPoints, ...totalGVDL };
  }

  private static getTotalGVDL(
    teamId: number,
    teamMatches: IMatch[],
  ): { totalGames: number; totalVictories: number; totalDraws: number; totalLosses: number } {
    const totalGames = LeaderboardCalculator.calculateTotalGames(teamMatches);
    const totalVictories = LeaderboardCalculator.calculateTotalVictories(
      teamId,
      teamMatches,
    );
    const totalDraws = LeaderboardCalculator.calculateTotalDraws(teamMatches);
    const totalLosses = LeaderboardCalculator.calculateTotalLosses(
      totalGames,
      totalVictories,
      totalDraws,
    );
    return { totalGames, totalVictories, totalDraws, totalLosses };
  }

  private static getGoalsFavorAndOwn(teamId: number, teamMatches: IMatch[]):
  { goalsFavor: number; goalsOwn: number } {
    const goalsFavor = LeaderboardCalculator.calculateGoalsScored(
      teamId,
      teamMatches,
    );
    const goalsOwn = LeaderboardCalculator.calculateGoalsConceded(
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
