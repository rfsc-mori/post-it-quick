import { Module } from '@nestjs/common';

import { EventsApiPostCommentModule } from './post-comment/EventsApiPostComment.module';

@Module({
  imports: [EventsApiPostCommentModule],
})
export class EventsApiModule {}
