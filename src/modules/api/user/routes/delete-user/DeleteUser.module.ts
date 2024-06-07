import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { UserRepositoryModule } from 'modules/database/repository/user/UserRepository.module';
import { UserProfileRepositoryModule } from 'modules/database/repository/user-profile/UserProfileRepository.module';
import { S3Module } from 'modules/s3/S3.module';

import { DeleteUserService } from './DeleteUser.service';

@Module({
  imports: [
    AuthorizationModule,
    UserRepositoryModule,
    UserProfileRepositoryModule,
    S3Module,
  ],
  providers: [DeleteUserService],
  exports: [DeleteUserService],
})
export class DeleteUserModule {}
