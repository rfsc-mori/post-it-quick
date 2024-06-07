import { Module } from '@nestjs/common';

import { AvatarProcessor } from './AvatarProcessor';

@Module({
  providers: [AvatarProcessor],
  exports: [AvatarProcessor],
})
export class AvatarProcessorModule {}
