import { Module } from '@nestjs/common';

import { AccessTokenModule } from '../../modules/access-token/AccessToken.module';
import { UserExistsGuardModule } from '../user-exists/UserExists.module';
import { AccessTokenAuthenticationGuard } from './AccessTokenAuthentication.guard';
import { AccessTokenAuthenticationStrategy } from './AccessTokenAuthentication.strategy';

@Module({
  imports: [AccessTokenModule, UserExistsGuardModule],
  providers: [
    AccessTokenAuthenticationGuard,
    AccessTokenAuthenticationStrategy,
  ],
  exports: [
    AccessTokenAuthenticationGuard,
    AccessTokenAuthenticationStrategy,
    UserExistsGuardModule,
  ],
})
export class AccessTokenAuthenticationModule {}
