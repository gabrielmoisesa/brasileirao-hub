import { IModelReader, IModelUpdater } from '../IModel';
import { IMatch } from './IMatch';

export type IMatchModel = Pick<IModelReader<IMatch>, 'findAll'> & IModelUpdater;
