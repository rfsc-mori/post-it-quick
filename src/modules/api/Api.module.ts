import { Module } from '@nestjs/common';

import { AuthenticationApiModule } from './authentication/AuthenticationApi.module';
import { AuthorizationApiModule } from './authorization/AuthorizationApi.module';
import { RootApiModule } from './root/RootApi.module';
import { UserApiModule } from './user/UserApi.module';

@Module({
  imports: [
    RootApiModule,
    UserApiModule,
    AuthenticationApiModule,
    AuthorizationApiModule,
  ],
})
export class ApiModule {}
