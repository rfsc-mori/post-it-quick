import { Module } from '@nestjs/common';

import { LocalLoginModule } from '../../guards/local-login-guard/LocalLogin.module';

@Module({
  imports: [LocalLoginModule],
  exports: [LocalLoginModule],
})
export class LocalAuthenticationModule {}
