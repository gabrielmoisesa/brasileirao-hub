import { Identifiable } from '../../types';

export interface IUser extends Identifiable {
  username: string;
  role: string;
  email: string;
  password: string;
}
