import { Module } from '@nestjs/common';

import { AddPostReactionModule } from './routes/add-post-reaction/AddPostReaction.module';
import { FindReactionStatsByPostModule } from './routes/find-reaction-stats-by-post/FindReactionStatsByPost.module';

@Module({
  imports: [AddPostReactionModule, FindReactionStatsByPostModule],
})
export class PostReactionApiModule {}
