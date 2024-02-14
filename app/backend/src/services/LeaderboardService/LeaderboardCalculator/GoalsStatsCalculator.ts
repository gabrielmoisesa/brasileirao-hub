import { IMatch } from '../../../Interfaces/matches/IMatch';
import { ILeaderboard } from '../../../Interfaces/leaderboard/ILeaderboard';

export default class GoalsStatsCalculator {
  public static getGoalsStats(teamId: number, teamMatches: IMatch[]):
  Pick<ILeaderboard, 'goalsFavor' | 'goalsOwn' | 'goalsBalance'> {
    const goalsFavor = GoalsStatsCalculator.calculateGoalsScored(
      teamId,
      teamMatches,
    );
    const goalsOwn = GoalsStatsCalculator.calculateGoalsConceded(
      teamId,
      teamMatches,
    );
    const goalsBalance = GoalsStatsCalculator.calculateGoalsBalance(goalsFavor, goalsOwn);
    return { goalsFavor, goalsOwn, goalsBalance };
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
}
