import { Module } from '@nestjs/common';

import { AddPostCommentModule } from './routes/add-post-comment/AddPostComment.module';

@Module({
  imports: [AddPostCommentModule],
})
export class PostCommentApiModule {}
