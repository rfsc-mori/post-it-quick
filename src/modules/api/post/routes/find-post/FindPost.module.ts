import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { PostRepositoryModule } from 'modules/database/repository/post/PostRepository.module';
import { S3Module } from 'modules/s3/S3.module';

import { FindPostController } from './FindPost.controller';
import { FindPostService } from './FindPost.service';

@Module({
  imports: [AuthorizationModule, PostRepositoryModule, S3Module],
  controllers: [FindPostController],
  providers: [FindPostService],
})
export class FindPostModule {}
