import { Module } from '@nestjs/common';

import { LoginModule } from './routes/login/Login.module';

@Module({
  imports: [LoginModule],
})
export class AuthenticationApiModule {}
