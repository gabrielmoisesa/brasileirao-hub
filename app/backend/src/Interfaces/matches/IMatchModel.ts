import { NewEntity } from '../../types';
import { IModelCreator, IModelReader } from '../IModel';
import { IMatch } from './IMatch';

export type NewMatch = NewEntity<Omit<IMatch, 'inProgress'>>;

export type IMatchModel = Pick<IModelReader<IMatch>, 'findAll'> &
IModelCreator<IMatch> & {
  updateMatchProgress(id: number): Promise<boolean>;
  updateMatchScore(
    id: number,
    homeTeamGoals: number,
    awayTeamGoals: number
  ): Promise<boolean>;
};
