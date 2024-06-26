import { Module } from '@nestjs/common';

import { CreatePostModule } from './routes/create-post/CreatePost.module';
import { DeletePostModule } from './routes/delete-post/DeletePost.module';
import { DeletePostImageModule } from './routes/delete-post-image/DeletePostImage.module';
import { FindAllPostsModule } from './routes/find-all-posts/FindAllPosts.module';
import { FindPostModule } from './routes/find-post/FindPost.module';
import { UpdatePostModule } from './routes/update-post/UpdatePost.module';
import { UploadPostImageModule } from './routes/upload-post-image/UploadPostImage.module';

@Module({
  imports: [
    CreatePostModule,
    DeletePostModule,
    UpdatePostModule,
    UploadPostImageModule,
    DeletePostImageModule,
    FindAllPostsModule,
    FindPostModule,
  ],
})
export class PostApiModule {}
