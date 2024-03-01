import { ILeaderboard } from '../../../Interfaces/leaderboard/ILeaderboard';
import { IMatch } from '../../../Interfaces/matches/IMatch';
import { ITeam } from '../../../Interfaces/teams/ITeam';
import GoalsStatsCalculator from './GoalsStatsCalculator';
import ResultsCalculator from './ResultsCalculator';

export default class LeaderboardCalculator {
  public static calculate(teams: ITeam[], matches: IMatch[], type?: 'home' | 'away'):
  ILeaderboard[] {
    const leaderboard = teams.map((team) => {
      const teamMatches = LeaderboardCalculator.getTeamMatches(team.id, matches, type);
      return LeaderboardCalculator.getTeamLeaderboard(team, teamMatches);
    });
    return LeaderboardCalculator.sortLeaderboard(leaderboard);
  }

  private static getTeamLeaderboard(team: ITeam, teamMatches: IMatch[]): ILeaderboard {
    const totalMatchesResults = ResultsCalculator.getTotalMatchesResults(team.id, teamMatches);
    const goalsStats = GoalsStatsCalculator.getGoalsStats(team.id, teamMatches);
    const efficiency = LeaderboardCalculator
      .calculateEfficiency(totalMatchesResults.totalPoints, totalMatchesResults.totalGames);
    const latestMatchResults = ResultsCalculator.getLatestMatchResults(team.id, teamMatches);

    return {
      name: team.teamName,
      ...totalMatchesResults,
      ...goalsStats,
      efficiency,
      latestMatchResults,
    };
  }

  /**
   * Sorts the leaderboard array in descending order based on total points, goals balance, and goals favor.
   * @param leaderboard - The leaderboard array to be sorted.
   * @returns The sorted leaderboard array.
   */
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

  private static calculateEfficiency(totalPoints: number, totalGames: number): string {
    return ((totalPoints / (totalGames * 3)) * 100).toFixed(2);
  }
}
