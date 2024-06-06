import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { UserRepositoryModule } from 'modules/database/repository/user/UserRepository.module';

import { UpdateUserService } from './UpdateUser.service';

@Module({
  imports: [AuthorizationModule, UserRepositoryModule],
  providers: [UpdateUserService],
  exports: [UpdateUserService],
})
export class UpdateUserModule {}
