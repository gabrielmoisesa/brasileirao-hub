import { ILeaderboard } from '../../../Interfaces/leaderboard/ILeaderboard';
import { IMatch } from '../../../Interfaces/matches/IMatch';

export default class ResultsCalculator {
  public static getTotalMatchesResults(
    teamId: number,
    teamMatches: IMatch[],
  ): Pick<
    ILeaderboard, 'totalPoints' | 'totalGames' | 'totalVictories' | 'totalDraws' | 'totalLosses'
    > {
    const totalGVDL = ResultsCalculator.getTotalGVDL(teamId, teamMatches);
    const totalPoints = ResultsCalculator.calculateTotalPoints(
      totalGVDL.totalVictories,
      totalGVDL.totalDraws,
    );
    return { totalPoints, ...totalGVDL };
  }

  private static getTotalGVDL(
    teamId: number,
    teamMatches: IMatch[],
  ): { totalGames: number; totalVictories: number; totalDraws: number; totalLosses: number } {
    const totalGames = ResultsCalculator.calculateTotalGames(teamMatches);
    const totalVictories = ResultsCalculator.calculateTotalVictories(
      teamId,
      teamMatches,
    );
    const totalDraws = ResultsCalculator.calculateTotalDraws(teamMatches);
    const totalLosses = ResultsCalculator.calculateTotalLosses(
      totalGames,
      totalVictories,
      totalDraws,
    );
    return { totalGames, totalVictories, totalDraws, totalLosses };
  }

  private static calculateTotalPoints(wins: number, draws: number): number {
    return wins * 3 + draws;
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
}