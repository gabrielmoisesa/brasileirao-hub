import { ILeaderboard } from "../../Interfaces/leaderboard/ILeaderboard"

const leaderboardHome: ILeaderboard[] = [
  {
    name: 'Team 1',
    totalPoints: 3,
    totalGames: 1,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 2,
    goalsOwn: 1,
    goalsBalance: 1,
    efficiency: '100.00',
  },
  {
    name: 'Team 2',
    totalPoints: 1,
    totalGames: 1,
    totalVictories: 0,
    totalDraws: 1,
    totalLosses: 0,
    goalsFavor: 2,
    goalsOwn: 2,
    goalsBalance: 0,
    efficiency: '33.33',
  },
  {
    name: 'Team 3',
    totalPoints: 0,
    totalGames: 1,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 1,
    goalsOwn: 3,
    goalsBalance: -2,
    efficiency: '0.00',
  }
]

export default {
  leaderboardHome,
}