import { Module } from '@nestjs/common';
import { PrismaModule } from 'modules/database/Prisma.module';

import { PostReactionRepository } from './PostReactionRepository';

@Module({
  imports: [PrismaModule],
  providers: [PostReactionRepository],
  exports: [PostReactionRepository],
})
export class PostReactionRepositoryModule {}
