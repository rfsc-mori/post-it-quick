import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import authenticationConfig from 'config/authentication.config';
import { ExtractJwt, Strategy } from 'passport-jwt';

import type { TAccessTokenPayload } from '../../types/accessTokenPayload.type';
import type { TRequestUser } from '../../types/requestUser.type';

@Injectable()
export class AccessTokenAuthenticationStrategy extends PassportStrategy(
  Strategy,
) {
  constructor(
    @Inject(authenticationConfig.KEY)
    config: ConfigType<typeof authenticationConfig>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.access_token.secret,
    });
  }

  async validate(payload: TAccessTokenPayload): Promise<TRequestUser> {
    const { sub: id, ...data } = payload;
    return { id, ...data };
  }
}
