import { userEmail } from '../decorators/dto/userEmail.decorator';
import { userName } from '../decorators/dto/userName.decorator';
import { userPassword } from '../decorators/dto/userPassword.decorator';
import type { TCreateUserPlainPassword } from '../types/createUserPlainPassword.type';

export class CreateUserDto implements TCreateUserPlainPassword {
  @userName()
  readonly name: string;

  @userEmail()
  readonly email: string;

  @userPassword()
  readonly password: string;
}
