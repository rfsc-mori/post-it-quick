import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';

import { FindUserModule } from '../find-user/FindUser.module';
import { FindCurrentUserController } from './FindCurrentUser.controller';

@Module({
  imports: [AuthorizationModule, FindUserModule],
  controllers: [FindCurrentUserController],
})
export class FindCurrentUserModule {}
