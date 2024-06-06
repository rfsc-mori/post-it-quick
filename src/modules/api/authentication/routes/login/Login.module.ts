import { Module } from '@nestjs/common';

import { CreateAccessTokenModule } from '../../modules/access-token/services/create-access-token/CreateAccessToken.module';
import { LocalAuthenticationModule } from '../../modules/local-authentication/LocalAuthentication.module';
import { LoginController } from './Login.controller';
import { LoginService } from './Login.service';

@Module({
  imports: [LocalAuthenticationModule, CreateAccessTokenModule],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
