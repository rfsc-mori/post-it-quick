import { Module } from '@nestjs/common';
import { PrismaModule } from 'modules/database/Prisma.module';

import { UserProfileRepository } from './UserProfileRepository';

@Module({
  imports: [PrismaModule],
  providers: [UserProfileRepository],
  exports: [UserProfileRepository],
})
export class UserProfileRepositoryModule {}
