import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';

import { UpdateUserModule } from '../update-user/UpdateUser.module';
import { UpdateCurrentUserController } from './UpdateCurrentUser.controller';

@Module({
  imports: [AuthorizationModule, UpdateUserModule],
  controllers: [UpdateCurrentUserController],
})
export class UpdateCurrentUserModule {}
