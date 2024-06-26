import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { UserProfileRepositoryModule } from 'modules/database/repository/user-profile/UserProfileRepository.module';
import { S3Module } from 'modules/s3/S3.module';

import { DeleteAvatarController } from './DeleteAvatar.controller';
import { DeleteAvatarService } from './DeleteAvatar.service';

@Module({
  imports: [AuthorizationModule, S3Module, UserProfileRepositoryModule],
  controllers: [DeleteAvatarController],
  providers: [DeleteAvatarService],
})
export class DeleteAvatarModule {}
