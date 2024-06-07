import { Module } from '@nestjs/common';
import { AccessTokenAuthenticationModule } from 'modules/api/authentication/guards/access-token-authentication/AccessTokenAuthentication.module';
import { UserExistsGuardModule } from 'modules/api/authentication/guards/user-exists/UserExists.module';

import {
  AUTHORIZATION_GRANT,
  AuthorizationGrant,
} from '../../constants/authorizationGrant.constant';

@Module({
  imports: [AccessTokenAuthenticationModule, UserExistsGuardModule],
  providers: [
    {
      provide: AuthorizationGrant,
      useValue: AUTHORIZATION_GRANT,
    },
  ],
  exports: [
    AccessTokenAuthenticationModule,
    UserExistsGuardModule,
    AuthorizationGrant,
  ],
})
export class AuthorizationModule {}
