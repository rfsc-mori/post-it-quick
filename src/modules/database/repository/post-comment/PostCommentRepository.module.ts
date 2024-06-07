import { Module } from '@nestjs/common';
import { PrismaModule } from 'modules/database/Prisma.module';

import { PostCommentRepository } from './PostCommentRepository';

@Module({
  imports: [PrismaModule],
  providers: [PostCommentRepository],
  exports: [PostCommentRepository],
})
export class PostCommentRepositoryModule {}
