import type { TUser } from 'modules/api/user/types/user.type';
import type { TUserProfile } from 'modules/api/user-profile/types/userProfile.type';

import type { TPostComment } from './postComment.type';

export type TPostCommentWithUser = TPostComment & {
  readonly user: Pick<TUser, 'id' | 'name'> & {
    readonly user_profile?: Pick<TUserProfile, 'avatar_key'> | null;
  };
};
