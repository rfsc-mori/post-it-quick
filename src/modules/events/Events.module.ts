import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { EventsApiModule } from './api/EventsApi.module';

@Module({
  imports: [EventEmitterModule.forRoot(), EventsApiModule],
})
export class EventsModule {}
