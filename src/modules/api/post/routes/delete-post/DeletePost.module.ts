import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { PostRepositoryModule } from 'modules/database/repository/post/PostRepository.module';
import { S3Module } from 'modules/s3/S3.module';

import { DeletePostController } from './DeletePost.controller';
import { DeletePostService } from './DeletePost.service';

@Module({
  imports: [AuthorizationModule, S3Module, PostRepositoryModule],
  providers: [DeletePostService],
  controllers: [DeletePostController],
})
export class DeletePostModule {}
