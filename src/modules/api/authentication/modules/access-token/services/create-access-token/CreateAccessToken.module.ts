import { Module } from '@nestjs/common';

import { AccessTokenModule } from '../../AccessToken.module';
import { CreateAccessTokenService } from './CreateAccessToken.service';

@Module({
  imports: [AccessTokenModule],
  providers: [CreateAccessTokenService],
  exports: [CreateAccessTokenService],
})
export class CreateAccessTokenModule {}
