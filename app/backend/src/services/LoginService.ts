import * as bcrypt from 'bcryptjs';
import jwtUtil from '../utils/jwt.util';
import { Token } from '../types/Token';
import { ServiceResponse, ServiceResponseError } from '../types/ServiceResponse';
import { IUserModel } from '../Interfaces/users/IUserModel';
import UserModel from '../models/UserModel';

export default class LoginService {
  private unauthorizedResponse: ServiceResponseError = {
    status: 'UNAUTHORIZED',
    data: { message: 'Invalid email or password' },
  };

  constructor(private userModel: IUserModel = new UserModel()) {}

  public async login(
    email: string,
    password: string,
  ): Promise<ServiceResponse<Token>> {
    const user = await this.userModel.findByEmail(email);
    if (!user) return this.unauthorizedResponse;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return this.unauthorizedResponse;

    const token = jwtUtil.sign({ id: user.id, role: user.role });

    return { status: 'OK', data: { token } };
  }
}
