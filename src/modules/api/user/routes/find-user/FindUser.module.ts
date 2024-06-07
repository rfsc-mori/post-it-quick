import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { UserRepositoryModule } from 'modules/database/repository/user/UserRepository.module';
import { UserProfileRepositoryModule } from 'modules/database/repository/user-profile/UserProfileRepository.module';
import { S3Module } from 'modules/s3/S3.module';

import { FindUserController } from './FindUser.controller';
import { FindUserService } from './FindUser.service';

@Module({
  imports: [
    AuthorizationModule,
    UserRepositoryModule,
    UserProfileRepositoryModule,
    S3Module,
  ],
  controllers: [FindUserController],
  providers: [FindUserService],
  exports: [FindUserService],
})
export class FindUserModule {}
