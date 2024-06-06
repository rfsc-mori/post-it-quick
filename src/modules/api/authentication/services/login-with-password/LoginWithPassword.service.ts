import { Injectable } from '@nestjs/common';
import { IncorrectCredentialsException } from 'exceptions/api/authentication/IncorrectCredentials.exception';
import { UserRepository } from 'modules/database/repository/user/UserRepository';
import { UserCredentialsRepository } from 'modules/database/repository/user-credentials/UserCredentialsRepository';
import { PasswordHasher } from 'utils/api/authentication/password-hasher/PasswordHasher';

import type { TRequestUser } from '../../types/requestUser.type';

@Injectable()
export class LoginWithPasswordService {
  constructor(
    private readonly user_repository: UserRepository,
    private readonly user_credentials_repository: UserCredentialsRepository,
    private readonly password_hasher: PasswordHasher,
  ) {}

  public async run(email: string, password: string): Promise<TRequestUser> {
    const user = await this.user_repository.findByEmail(email);

    if (!user) {
      throw new IncorrectCredentialsException();
    }

    const credentials = await this.user_credentials_repository.findByUserId(
      user.id,
    );

    if (!credentials) {
      throw new IncorrectCredentialsException();
    }

    const is_password_valid = await this.password_hasher.compare(
      password,
      credentials.password_hash,
    );

    if (!is_password_valid) {
      throw new IncorrectCredentialsException();
    }

    return {
      id: user.id,
      roles: user.roles,
    };
  }
}
