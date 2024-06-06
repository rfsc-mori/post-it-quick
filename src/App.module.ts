import { Module } from '@nestjs/common';
import { ApiModule } from 'modules/api/Api.module';
import { AppConfigModule } from 'modules/config/AppConfig.module';

@Module({
  imports: [AppConfigModule, ApiModule],
})
export class AppModule {}
