import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { PostRepositoryModule } from 'modules/database/repository/post/PostRepository.module';
import { S3Module } from 'modules/s3/S3.module';

import { DeletePostImageController } from './DeletePostImage.controller';
import { DeletePostImageService } from './DeletePostImage.service';

@Module({
  imports: [AuthorizationModule, S3Module, PostRepositoryModule],
  controllers: [DeletePostImageController],
  providers: [DeletePostImageService],
})
export class DeletePostImageModule {}
