import { Identifiable } from '../../types';

export interface ITeam extends Identifiable {
  teamName: string;
  imageUrl: string;
}
