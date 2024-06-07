import { Module } from '@nestjs/common';

import { PostImageProcessor } from './PostImageProcessor';

@Module({
  providers: [PostImageProcessor],
  exports: [PostImageProcessor],
})
export class PostImageProcessorModule {}
