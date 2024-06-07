import { Module } from '@nestjs/common';
import { PrismaModule } from 'modules/database/Prisma.module';

import { PostRepository } from './PostRepository';

@Module({
  imports: [PrismaModule],
  providers: [PostRepository],
  exports: [PostRepository],
})
export class PostRepositoryModule {}
