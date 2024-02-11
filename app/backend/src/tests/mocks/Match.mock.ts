import { IMatch } from '../../Interfaces/matches/IMatch';

const matches: IMatch[] = [
  {
    id: 1,
    homeTeamId: 1,
    homeTeamGoals: 2,
    awayTeamId: 2,
    awayTeamGoals: 1,
    inProgress: false,
  },
  {
    id: 2,
    homeTeamId: 3,
    homeTeamGoals: 1,
    awayTeamId: 4,
    awayTeamGoals: 3,
    inProgress: false,
  },
  {
    id: 3,
    homeTeamId: 2,
    homeTeamGoals: 2,
    awayTeamId: 3,
    awayTeamGoals: 2,
    inProgress: false,
  },
  {
    id: 4,
    homeTeamId: 4,
    homeTeamGoals: 0,
    awayTeamId: 1,
    awayTeamGoals: 2,
    inProgress: false,
  },
];

export default {
  matches,
};
