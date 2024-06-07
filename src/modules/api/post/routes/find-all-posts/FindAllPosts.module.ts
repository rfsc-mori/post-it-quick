import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { PostRepositoryModule } from 'modules/database/repository/post/PostRepository.module';
import { PostCommentRepositoryModule } from 'modules/database/repository/post-comment/PostCommentRepository.module';
import { PostReactionRepositoryModule } from 'modules/database/repository/post-reaction/PostReactionRepository.module';

import { FindAllPostsController } from './FindAllPosts.controller';
import { FindAllPostsService } from './FindAllPosts.service';

@Module({
  imports: [
    AuthorizationModule,
    PostRepositoryModule,
    PostCommentRepositoryModule,
    PostReactionRepositoryModule,
  ],
  providers: [FindAllPostsService],
  controllers: [FindAllPostsController],
})
export class FindAllPostsModule {}
