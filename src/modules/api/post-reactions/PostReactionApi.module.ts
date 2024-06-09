import { Module } from '@nestjs/common';

import { AddPostReactionModule } from './routes/add-post-reaction/AddPostReaction.module';
import { DeletePostReactionModule } from './routes/delete-post-reaction/DeletePostReaction.module';
import { FindReactionStatsByPostModule } from './routes/find-reaction-stats-by-post/FindReactionStatsByPost.module';

@Module({
  imports: [
    AddPostReactionModule,
    FindReactionStatsByPostModule,
    DeletePostReactionModule,
  ],
})
export class PostReactionApiModule {}
