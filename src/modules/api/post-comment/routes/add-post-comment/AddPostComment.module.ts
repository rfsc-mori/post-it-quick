import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { PostRepositoryModule } from 'modules/database/repository/post/PostRepository.module';
import { PostCommentRepositoryModule } from 'modules/database/repository/post-comment/PostCommentRepository.module';

import { AddPostCommentController } from './AddPostComment.controller';
import { AddPostCommentService } from './AddPostComment.service';

@Module({
  imports: [
    AuthorizationModule,
    PostRepositoryModule,
    PostCommentRepositoryModule,
  ],
  providers: [AddPostCommentService],
  controllers: [AddPostCommentController],
})
export class AddPostCommentModule {}
