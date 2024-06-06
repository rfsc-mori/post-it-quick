import { accessToken } from '../decorators/dto/accessToken.decorator';
import { expiresIn } from '../decorators/dto/expiresIn.decorator';
import { tokenType } from '../decorators/dto/tokenType.decorator';
import type { TLoginReply } from '../types/loginReply.type';

export class LoginReplyDto implements TLoginReply {
  @accessToken()
  readonly access_token: string;

  @tokenType()
  readonly token_type: 'Bearer';

  @expiresIn()
  readonly expires_in: number;
}
