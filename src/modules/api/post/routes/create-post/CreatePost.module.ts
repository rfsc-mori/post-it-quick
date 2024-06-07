import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { PostRepositoryModule } from 'modules/database/repository/post/PostRepository.module';

import { CreatePostController } from './CreatePost.controller';
import { CreatePostService } from './CreatePost.service';

@Module({
  imports: [AuthorizationModule, PostRepositoryModule],
  providers: [CreatePostService],
  controllers: [CreatePostController],
})
export class CreatePostModule {}
