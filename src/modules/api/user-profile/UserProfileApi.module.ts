import { Module } from '@nestjs/common';

import { UpdateCurrentProfileUserModule } from './routes/update-current-user-profile/UpdateCurrentUserProfile.module';

@Module({
  imports: [UpdateCurrentProfileUserModule],
})
export class UserProfileApiModule {}
