import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { PostReactionRepositoryModule } from 'modules/database/repository/post-reaction/PostReactionRepository.module';

import { FindReactionStatsByPostController } from './FindReactionStatsByPost.controller';
import { FindReactionStatsByPostService } from './FindReactionStatsByPost.service';

@Module({
  imports: [AuthorizationModule, PostReactionRepositoryModule],
  providers: [FindReactionStatsByPostService],
  controllers: [FindReactionStatsByPostController],
})
export class FindReactionStatsByPostModule {}
