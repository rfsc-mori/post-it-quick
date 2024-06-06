import { Module } from '@nestjs/common';
import { PrismaModule } from 'modules/database/Prisma.module';

import { UserRepository } from './UserRepository';

@Module({
  imports: [PrismaModule],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class UserRepositoryModule {}
