import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { PostRepositoryModule } from 'modules/database/repository/post/PostRepository.module';
import { PostReactionRepositoryModule } from 'modules/database/repository/post-reaction/PostReactionRepository.module';

import { AddPostReactionController } from './AddPostReaction.controller';
import { AddPostReactionService } from './AddPostReaction.service';

@Module({
  imports: [
    AuthorizationModule,
    PostRepositoryModule,
    PostReactionRepositoryModule,
  ],
  providers: [AddPostReactionService],
  controllers: [AddPostReactionController],
})
export class AddPostReactionModule {}
