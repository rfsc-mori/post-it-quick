import { Module } from '@nestjs/common';

import { CreatePostModule } from './routes/create-post/CreatePost.module';
import { DeletePostModule } from './routes/delete-post/DeletePost.module';
import { UpdatePostModule } from './routes/update-post/UpdatePost.module';

@Module({
  imports: [CreatePostModule, DeletePostModule, UpdatePostModule],
})
export class PostApiModule {}
