import { IModelReader } from '../IModel';
import { IUser } from './IUser';

export type IUserModel = Pick<IModelReader<IUser>, 'findById'> & {
  findByEmail(email: string): Promise<IUser | null>;
};
