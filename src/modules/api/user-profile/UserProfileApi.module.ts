import { Module } from '@nestjs/common';

import { DeleteAvatarModule } from './routes/delete-avatar/DeleteAvatar.module';
import { UpdateCurrentProfileUserModule } from './routes/update-current-user-profile/UpdateCurrentUserProfile.module';
import { UploadAvatarModule } from './routes/upload-avatar/UploadAvatar.module';

@Module({
  imports: [
    UpdateCurrentProfileUserModule,
    UploadAvatarModule,
    DeleteAvatarModule,
  ],
})
export class UserProfileApiModule {}
