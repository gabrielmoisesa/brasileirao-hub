import { ServiceResponse } from '../types/ServiceResponse';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
import MatchModel from '../models/MatchModel';
import { IMatch } from '../Interfaces/matches/IMatch';

export default class MatchService {
  constructor(private matchModel: IMatchModel = new MatchModel()) {}

  public async getAll(inProgress?: string): Promise<ServiceResponse<IMatch[]>> {
    const matches = await this.matchModel.findAll();
    if (inProgress === 'true' || inProgress === 'false') {
      return {
        status: 'OK',
        data: matches.filter(
          (match) => match.inProgress === JSON.parse(inProgress),
        ),
      };
    }
    return { status: 'OK', data: matches };
  }
}
