import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { UserRepositoryModule } from 'modules/database/repository/user/UserRepository.module';

import { DeleteUserService } from './DeleteUser.service';

@Module({
  imports: [AuthorizationModule, UserRepositoryModule],
  providers: [DeleteUserService],
  exports: [DeleteUserService],
})
export class DeleteUserModule {}
