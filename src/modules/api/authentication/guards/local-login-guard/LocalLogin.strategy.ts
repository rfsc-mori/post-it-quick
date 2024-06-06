import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UnknownAuthenticationError } from 'exceptions/api/authentication/UnknownAuthenticationError.exception';
import { Strategy } from 'passport-local';

import { LoginWithPasswordService } from '../../services/login-with-password/LoginWithPassword.service';
import type { TRequestUser } from '../../types/requestUser.type';

@Injectable()
export class LocalLoginStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly login_with_password: LoginWithPasswordService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<TRequestUser> {
    return await this.loginWithPassword(email, password).catch((err: Error) => {
      if (err instanceof UnauthorizedException) {
        throw err;
      } else {
        throw new UnknownAuthenticationError(err);
      }
    });
  }

  private async loginWithPassword(
    email: string,
    password: string,
  ): Promise<TRequestUser> {
    const user = await this.login_with_password.run(email, password);

    return {
      id: user.id,
    };
  }
}
