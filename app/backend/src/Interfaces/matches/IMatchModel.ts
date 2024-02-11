import { IModelReader } from '../IModel';
import { IMatch } from './IMatch';

export type IMatchModel = Pick<IModelReader<IMatch>, 'findAll'> & {
  updateMatchProgress(id: number): Promise<boolean>;
  updateMatchScore(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<boolean>;
};
