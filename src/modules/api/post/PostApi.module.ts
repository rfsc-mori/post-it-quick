import { Module } from '@nestjs/common';

import { CreatePostModule } from './routes/create-post/CreatePost.module';

@Module({
  imports: [CreatePostModule],
})
export class PostApiModule {}
