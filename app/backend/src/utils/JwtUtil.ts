import * as jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/token/TokenPayload';

export default class JwtUtil {
  private static secret = process.env.JWT_SECRET || 'jwt_secret';

  public static sign(payload: TokenPayload): string {
    return jwt.sign(payload, JwtUtil.secret, { expiresIn: '1h' });
  }

  public static verify(token: string): TokenPayload {
    return jwt.verify(token, JwtUtil.secret) as TokenPayload;
  }
}
