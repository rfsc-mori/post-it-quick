import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import authenticationConfig from 'config/authentication.config';

import { CreateAccessTokenService } from '../../modules/access-token/services/create-access-token/CreateAccessToken.service';
import type { TLoginReply } from '../../types/loginReply.type';
import type { TRequestUser } from '../../types/requestUser.type';

@Injectable()
export class LoginService {
  constructor(
    private readonly create_access_token: CreateAccessTokenService,

    @Inject(authenticationConfig.KEY)
    private readonly config: ConfigType<typeof authenticationConfig>,
  ) {}

  async run(user: TRequestUser): Promise<TLoginReply> {
    const access_token = await this.create_access_token.run(user);

    return {
      access_token,
      token_type: 'Bearer',
      expires_in: this.config.access_token.expires_in_seconds,
    };
  }
}
