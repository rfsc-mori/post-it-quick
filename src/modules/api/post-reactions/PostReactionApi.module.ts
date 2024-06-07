import { Module } from '@nestjs/common';

import { AddPostReactionModule } from './routes/add-post-reaction/AddPostReaction.module';

@Module({
  imports: [AddPostReactionModule],
})
export class PostReactionApiModule {}
