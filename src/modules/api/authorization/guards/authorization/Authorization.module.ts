import { Module } from '@nestjs/common';
import { AccessTokenAuthenticationModule } from 'modules/api/authentication/guards/access-token-authentication/AccessTokenAuthentication.module';

import {
  AUTHORIZATION_GRANT,
  AuthorizationGrant,
} from '../../constants/authorizationGrant.constant';

@Module({
  imports: [AccessTokenAuthenticationModule],
  providers: [
    {
      provide: AuthorizationGrant,
      useValue: AUTHORIZATION_GRANT,
    },
  ],
  exports: [AuthorizationGrant],
})
export class AuthorizationModule {}
