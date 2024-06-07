import { userId } from 'modules/api/user/decorators/dto/userId.decorator';

import { userProfileAvatarKey } from '../decorators/dto/userProfileAvatarKey.decorator';
import { userProfileCreatedAt } from '../decorators/dto/userProfileCreatedAt.decorator';
import { userProfileDescription } from '../decorators/dto/userProfileDescription.decorator';
import { userProfileId } from '../decorators/dto/userProfileId.decorator';
import { userProfileUpdatedAt } from '../decorators/dto/userProfileUpdatedAt.decorator';
import type { TUserProfile } from '../types/userProfile.type';

export class UserProfileDto implements TUserProfile {
  @userProfileId()
  readonly id: string;

  @userId()
  readonly user_id: string;

  @userProfileDescription()
  readonly description?: string | null;

  @userProfileAvatarKey()
  readonly avatar_key?: string | null;

  @userProfileCreatedAt()
  readonly created_at: Date;

  @userProfileUpdatedAt()
  readonly updated_at: Date;
}
