import type { TUserProfile } from 'modules/api/user-profile/types/userProfile.type';

import type { TUser } from './user.type';

export type TUserWithProfile = TUser & {
  readonly profile: TUserProfile;
  readonly avatar_url?: URL | null;
};
