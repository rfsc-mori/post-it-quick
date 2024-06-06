import { Module } from '@nestjs/common';

import { LoginWithPasswordModule } from '../../services/login-with-password/LoginWithPassword.module';
import { LocalLoginGuard } from './LocalLogin.guard';
import { LocalLoginStrategy } from './LocalLogin.strategy';

@Module({
  imports: [LoginWithPasswordModule],
  providers: [LocalLoginGuard, LocalLoginStrategy],
  exports: [LocalLoginGuard, LocalLoginStrategy],
})
export class LocalLoginModule {}
