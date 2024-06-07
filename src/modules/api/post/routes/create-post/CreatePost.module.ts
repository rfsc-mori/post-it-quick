import { Module } from '@nestjs/common';
import { PostRepositoryModule } from 'modules/database/repository/post/PostRepository.module';

import { CreatePostController } from './CreatePost.controller';
import { CreatePostService } from './CreatePost.service';

@Module({
  imports: [PostRepositoryModule],
  providers: [CreatePostService],
  controllers: [CreatePostController],
})
export class CreatePostModule {}
