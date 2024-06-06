import { Module } from '@nestjs/common';

import { AuthenticationApiModule } from './authentication/AuthenticationApi.module';
import { RootApiModule } from './root/RootApi.module';
import { UserApiModule } from './user/UserApi.module';

@Module({
  imports: [RootApiModule, UserApiModule, AuthenticationApiModule],
})
export class ApiModule {}
