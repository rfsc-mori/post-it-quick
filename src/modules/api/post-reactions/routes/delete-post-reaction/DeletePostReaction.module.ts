import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { PostRepositoryModule } from 'modules/database/repository/post/PostRepository.module';
import { PostReactionRepositoryModule } from 'modules/database/repository/post-reaction/PostReactionRepository.module';

import { DeletePostReactionController } from './DeletePostReaction.controller';
import { DeletePostReactionService } from './DeletePostReaction.service';

@Module({
  imports: [
    AuthorizationModule,
    PostRepositoryModule,
    PostReactionRepositoryModule,
  ],
  providers: [DeletePostReactionService],
  controllers: [DeletePostReactionController],
})
export class DeletePostReactionModule {}
