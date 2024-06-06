import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';

import { DeleteUserModule } from '../delete-user/DeleteUser.module';
import { DeleteCurrentUserController } from './DeleteCurrentUser.controller';

@Module({
  imports: [AuthorizationModule, DeleteUserModule],
  controllers: [DeleteCurrentUserController],
})
export class DeleteCurrentUserModule {}
