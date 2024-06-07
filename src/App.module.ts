import { Module } from '@nestjs/common';
import { ApiModule } from 'modules/api/Api.module';
import { AppConfigModule } from 'modules/config/AppConfig.module';
import { EventsModule } from 'modules/events/Events.module';

@Module({
  imports: [AppConfigModule, ApiModule, EventsModule],
})
export class AppModule {}
