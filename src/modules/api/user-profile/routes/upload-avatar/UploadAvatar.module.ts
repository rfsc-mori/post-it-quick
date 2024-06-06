import { Module } from '@nestjs/common';
import { AuthorizationModule } from 'modules/api/authorization/guards/authorization/Authorization.module';
import { UserProfileRepositoryModule } from 'modules/database/repository/user-profile/UserProfileRepository.module';
import { AvatarProcessorModule } from 'modules/image/processor/avatar/AvatarProcessor.module';
import { MulterForAvatarModule } from 'modules/image/upload/avatar/MulterForAvatar.module';
import { S3Module } from 'modules/s3/S3.module';

import { UploadAvatarController } from './UploadAvatar.controller';
import { UploadAvatarService } from './UploadAvatar.service';

@Module({
  imports: [
    AuthorizationModule,
    MulterForAvatarModule,
    AvatarProcessorModule,
    S3Module,
    UserProfileRepositoryModule,
  ],
  controllers: [UploadAvatarController],
  providers: [UploadAvatarService],
})
export class UploadAvatarModule {}
