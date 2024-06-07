import { Module } from '@nestjs/common';

import { CreatePostModule } from './routes/create-post/CreatePost.module';
import { DeletePostModule } from './routes/delete-post/DeletePost.module';
import { DeletePostImageModule } from './routes/delete-post-image/DeletePostImage.module';
import { UpdatePostModule } from './routes/update-post/UpdatePost.module';
import { UploadPostImageModule } from './routes/upload-post-image/UploadPostImage.module';

@Module({
  imports: [
    CreatePostModule,
    DeletePostModule,
    UpdatePostModule,
    UploadPostImageModule,
    DeletePostImageModule,
  ],
})
export class PostApiModule {}
