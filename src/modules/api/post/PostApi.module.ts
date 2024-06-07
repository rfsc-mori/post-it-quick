import { Module } from '@nestjs/common';

import { CreatePostModule } from './routes/create-post/CreatePost.module';
import { DeletePostModule } from './routes/delete-post/DeletePost.module';

@Module({
  imports: [CreatePostModule, DeletePostModule],
})
export class PostApiModule {}