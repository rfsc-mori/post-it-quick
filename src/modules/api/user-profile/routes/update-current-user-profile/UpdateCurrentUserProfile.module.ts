import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';

import { UpdateUserProfileModule } from '../update-user-profile/UpdateUserProfile.module';
import { UpdateCurrentUserProfileController } from './UpdateCurrentUserProfile.controller';

@Module({
  imports: [AuthorizationModule, UpdateUserProfileModule],
  controllers: [UpdateCurrentUserProfileController],
})
export class UpdateCurrentProfileUserModule {}
