import { Module } from '@nestjs/common';

import { AccessTokenModule } from '../../modules/access-token/AccessToken.module';
import { AccessTokenAuthenticationGuard } from './AccessTokenAuthentication.guard';
import { AccessTokenAuthenticationStrategy } from './AccessTokenAuthentication.strategy';

@Module({
  imports: [AccessTokenModule],
  providers: [
    AccessTokenAuthenticationGuard,
    AccessTokenAuthenticationStrategy,
  ],
  exports: [AccessTokenAuthenticationGuard, AccessTokenAuthenticationStrategy],
})
export class AccessTokenAuthenticationModule {}
