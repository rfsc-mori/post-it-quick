import { Module } from '@nestjs/common';
import { PrismaModule } from 'modules/database/Prisma.module';

import { UserCredentialsRepository } from './UserCredentialsRepository';

@Module({
  imports: [PrismaModule],
  providers: [UserCredentialsRepository],
  exports: [UserCredentialsRepository],
})
export class UserCredentialsRepositoryModule {}
