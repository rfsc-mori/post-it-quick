import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { PostRepositoryModule } from 'modules/database/repository/post/PostRepository.module';

import { DeletePostController } from './DeletePost.controller';
import { DeletePostService } from './DeletePost.service';

@Module({
  imports: [AuthorizationModule, PostRepositoryModule],
  providers: [DeletePostService],
  controllers: [DeletePostController],
})
export class DeletePostModule {}
