import { Module } from '@nestjs/common';

import { RootApiModule } from './root/RootApi.module';
import { UserApiModule } from './user/UserApi.module';

@Module({
  imports: [RootApiModule, UserApiModule],
})
export class ApiModule {}
