import { Module } from '@nestjs/common';

import { NewPostCommentModule } from './new-post-comment/NewPostComment.module';

@Module({
  imports: [NewPostCommentModule],
})
export class EventsApiPostCommentModule {}
