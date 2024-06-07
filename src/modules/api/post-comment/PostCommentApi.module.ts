import { Module } from '@nestjs/common';

import { AddPostCommentModule } from './routes/add-post-comment/AddPostComment.module';
import { UpdatePostCommentModule } from './routes/update-post-comment/UpdatePostComment.module';

@Module({
  imports: [AddPostCommentModule, UpdatePostCommentModule],
})
export class PostCommentApiModule {}
