import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { PostRepositoryModule } from 'modules/database/repository/post/PostRepository.module';
import { PostCommentRepositoryModule } from 'modules/database/repository/post-comment/PostCommentRepository.module';

import { DeletePostCommentController } from './DeletePostComment.controller';
import { DeletePostCommentService } from './DeletePostComment.service';

@Module({
  imports: [
    AuthorizationModule,
    PostRepositoryModule,
    PostCommentRepositoryModule,
  ],
  providers: [DeletePostCommentService],
  controllers: [DeletePostCommentController],
})
export class DeletePostCommentModule {}
