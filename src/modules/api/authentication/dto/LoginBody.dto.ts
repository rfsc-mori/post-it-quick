import { userEmail } from 'modules/api/user/decorators/dto/userEmail.decorator';
import { userPassword } from 'modules/api/user/decorators/dto/userPassword.decorator';

import type { TLoginBody } from '../types/loginBody.type';

export class LoginBodyDto implements TLoginBody {
  @userEmail()
  readonly email: string;

  @userPassword()
  readonly password: string;
}
