import { IUser } from '../Interfaces/users/IUser';
import SUserModel from '../database/models/SUserModel';
import { IUserModel } from '../Interfaces/users/IUserModel';

export default class UserModel implements IUserModel {
  private model = SUserModel;

  async findById(id: number): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { id } });
    if (!user) return null;
    return user.dataValues;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.model.findOne({ where: { email } });
    if (!user) return null;
    return user.dataValues;
  }
}
