import { Injectable } from '@nestjs/common';
import { UserAlreadyExistsException } from 'exceptions/api/user/UserAlreadyExists.exception';
import { InvalidPasswordFormatException } from 'exceptions/api/user-credentials/InvalidPasswordFormat.exception';
import { UserRepository } from 'modules/database/repository/user/UserRepository';
import { PasswordHasher } from 'utils/api/authentication/password-hasher/PasswordHasher';
import { PasswordValidator } from 'utils/api/authentication/password-validator/PasswordValidator';

import type { TCreateUserPlainPassword } from '../../types/createUserPlainPassword.type';
import type { TUser } from '../../types/user.type';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly user_repository: UserRepository,
    private readonly password_validator: PasswordValidator,
    private readonly password_hasher: PasswordHasher,
  ) {}

  async run(data: TCreateUserPlainPassword): Promise<TUser> {
    if (!this.password_validator.isValid(data.password)) {
      throw new InvalidPasswordFormatException();
    }

    const user_exists = !!(await this.user_repository.findByEmail(data.email));

    if (user_exists) {
      throw new UserAlreadyExistsException();
    }

    const password_hash = await this.password_hasher.hash(data.password);

    return await this.user_repository.create({
      name: data.name,
      email: data.email,
      password_hash,
    });
  }
}
