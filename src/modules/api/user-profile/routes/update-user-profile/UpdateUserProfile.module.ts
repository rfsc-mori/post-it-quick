import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { UserRepositoryModule } from 'modules/database/repository/user/UserRepository.module';
import { UserProfileRepositoryModule } from 'modules/database/repository/user-profile/UserProfileRepository.module';

import { UpdateUserProfileService } from './UpdateUserProfile.service';

@Module({
  imports: [
    AuthorizationModule,
    UserRepositoryModule,
    UserProfileRepositoryModule,
  ],
  providers: [UpdateUserProfileService],
  exports: [UpdateUserProfileService],
})
export class UpdateUserProfileModule {}
