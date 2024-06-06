import { Module } from '@nestjs/common';

import { UpdateCurrentProfileUserModule } from './routes/update-current-user-profile/UpdateCurrentUserProfile.module';
import { UploadAvatarModule } from './routes/upload-avatar/UploadAvatar.module';

@Module({
  imports: [UpdateCurrentProfileUserModule, UploadAvatarModule],
})
export class UserProfileApiModule {}
