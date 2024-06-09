import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { PostRepositoryModule } from 'modules/database/repository/post/PostRepository.module';
import { PostCommentRepositoryModule } from 'modules/database/repository/post-comment/PostCommentRepository.module';
import { S3Module } from 'modules/s3/S3.module';

import { FindCommentsByPostController } from './FindCommentsByPost.controller';
import { FindCommentsByPostService } from './FindCommentsByPost.service';

@Module({
  imports: [
    AuthorizationModule,
    PostRepositoryModule,
    PostCommentRepositoryModule,
    S3Module,
  ],
  providers: [FindCommentsByPostService],
  controllers: [FindCommentsByPostController],
})
export class FindCommentsByPostModule {}
