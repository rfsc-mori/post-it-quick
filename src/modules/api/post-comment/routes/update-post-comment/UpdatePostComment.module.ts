import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { PostCommentRepositoryModule } from 'modules/database/repository/post-comment/PostCommentRepository.module';

import { UpdatePostCommentController } from './UpdatePostComment.controller';
import { UpdatePostCommentService } from './UpdatePostComment.service';

@Module({
  imports: [AuthorizationModule, PostCommentRepositoryModule],
  providers: [UpdatePostCommentService],
  controllers: [UpdatePostCommentController],
})
export class UpdatePostCommentModule {}
