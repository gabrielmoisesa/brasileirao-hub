import { ILeaderboard } from '../../../Interfaces/leaderboard/ILeaderboard';
import { IMatch } from '../../../Interfaces/matches/IMatch';
import { ITeam } from '../../../Interfaces/teams/ITeam';

export default class LeaderboardCalculator {
  public static calculate(
    teams: ITeam[],
    matches: IMatch[],
    type?: 'home' | 'away',
  ): ILeaderboard[] {
    return LeaderboardCalculator.sortLeaderboard(teams.map((team) => {
      const teamMatches = LeaderboardCalculator.getTeamMatches(team.id, matches, type);
      const totalMatchesResults = LeaderboardCalculator
        .getTotalMatchesResults(team.id, teamMatches);

      const goalsStats = LeaderboardCalculator.getGoalsStats(team.id, teamMatches);
      const efficiency = LeaderboardCalculator
        .calculateEfficiency(totalMatchesResults.totalPoints, totalMatchesResults.totalGames);

      return {
        name: team.teamName,
        ...totalMatchesResults,
        ...goalsStats,
        efficiency,
      };
    }));
  }

  private static sortLeaderboard(leaderboard: ILeaderboard[]): ILeaderboard[] {
    return leaderboard.sort((a, b) => {
      if (a.totalPoints === b.totalPoints) {
        if (a.goalsBalance === b.goalsBalance) {
          return b.goalsFavor - a.goalsFavor;
        }
        return b.goalsBalance - a.goalsBalance;
      }
      return b.totalPoints - a.totalPoints;
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

  private static getTotalMatchesResults(
    teamId: number,
    teamMatches: IMatch[],
  ): Pick<
    ILeaderboard, 'totalPoints' | 'totalGames' | 'totalVictories' | 'totalDraws' | 'totalLosses'
    > {
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

  private static getGoalsStats(teamId: number, teamMatches: IMatch[]):
  Pick<ILeaderboard, 'goalsFavor' | 'goalsOwn' | 'goalsBalance'> {
    const goalsFavor = LeaderboardCalculator.calculateGoalsScored(
      teamId,
      teamMatches,
    );
    const goalsOwn = LeaderboardCalculator.calculateGoalsConceded(
      teamId,
      teamMatches,
    );
    const goalsBalance = LeaderboardCalculator.calculateGoalsBalance(goalsFavor, goalsOwn);
    return { goalsFavor, goalsOwn, goalsBalance };
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

  private static calculateGoalsBalance(goalsFavor: number, goalsOwn: number): number {
    return goalsFavor - goalsOwn;
  }

  private static calculateEfficiency(totalPoints: number, totalGames: number): string {
    return ((totalPoints / (totalGames * 3)) * 100).toFixed(2);
  }
}
