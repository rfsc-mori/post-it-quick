import { Module } from '@nestjs/common';

import { AddPostCommentModule } from './routes/add-post-comment/AddPostComment.module';
import { DeletePostCommentModule } from './routes/delete-post-comment/DeletePostComment.module';
import { FindCommentsByPostModule } from './routes/find-comments-by-post/FindCommentsByPost.module';
import { UpdatePostCommentModule } from './routes/update-post-comment/UpdatePostComment.module';

@Module({
  imports: [
    AddPostCommentModule,
    UpdatePostCommentModule,
    DeletePostCommentModule,
    FindCommentsByPostModule,
  ],
})
export class PostCommentApiModule {}
