import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { PostRepositoryModule } from 'modules/database/repository/post/PostRepository.module';

import { UpdatePostController } from './UpdatePost.controller';
import { UpdatePostService } from './UpdatePost.service';

@Module({
  imports: [AuthorizationModule, PostRepositoryModule],
  providers: [UpdatePostService],
  controllers: [UpdatePostController],
})
export class UpdatePostModule {}
