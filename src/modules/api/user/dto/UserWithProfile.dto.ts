import type { TAuthorizationRole } from 'modules/api/authorization/constants/authorizationRole.constant';
import { UserProfileDto } from 'modules/api/user-profile/dto/UserProfile.dto';

import { userAvatarURL } from '../decorators/dto/userAvatarURL.decorator';
import { userCreatedAt } from '../decorators/dto/userCreatedAt.decorator';
import { userEmail } from '../decorators/dto/userEmail.decorator';
import { userId } from '../decorators/dto/userId.decorator';
import { userName } from '../decorators/dto/userName.decorator';
import { userProfile } from '../decorators/dto/userProfile.decorator';
import { userRoles } from '../decorators/dto/userRoles.decorator';
import { userUpdatedAt } from '../decorators/dto/userUpdatedAt.decorator';
import type { TUserWithProfile } from '../types/userWithProfile.type';

export class UserWithProfileDto implements TUserWithProfile {
  @userId()
  readonly id: string;

  @userName()
  readonly name: string;

  @userEmail()
  readonly email: string;

  @userRoles()
  readonly roles: TAuthorizationRole[];

  @userCreatedAt()
  readonly created_at: Date;

  @userUpdatedAt()
  readonly updated_at: Date;

  @userProfile()
  readonly profile: UserProfileDto;

  @userAvatarURL()
  readonly avatar_url?: URL | null;
}
