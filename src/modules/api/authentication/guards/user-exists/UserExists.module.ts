import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'modules/database/repository/user/UserRepository.module';

import { UserExistsGuard } from './UserExists.guard';

@Module({
  imports: [UserRepositoryModule],
  providers: [UserExistsGuard],
  exports: [UserRepositoryModule, UserExistsGuard],
})
export class UserExistsGuardModule {}
