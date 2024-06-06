import { Module } from '@nestjs/common';

import { RootApiModule } from './root/RootApi.module';

@Module({
  imports: [RootApiModule],
})
export class ApiModule {}
