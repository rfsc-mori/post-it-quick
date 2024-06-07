import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { PostRepositoryModule } from 'modules/database/repository/post/PostRepository.module';
import { PostImageProcessorModule } from 'modules/image/processor/post-image/PostImageProcessor.module';
import { MulterForPostImageModule } from 'modules/image/upload/post-image/MulterForPostImage.module';
import { S3Module } from 'modules/s3/S3.module';

import { UploadPostImageController } from './UploadPostImage.controller';
import { UploadPostImageService } from './UploadPostImage.service';

@Module({
  imports: [
    AuthorizationModule,
    MulterForPostImageModule,
    PostImageProcessorModule,
    S3Module,
    PostRepositoryModule,
  ],
  controllers: [UploadPostImageController],
  providers: [UploadPostImageService],
})
export class UploadPostImageModule {}
