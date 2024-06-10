import type { TUser } from 'modules/api/user/types/user.type';
import type { TUserProfile } from 'modules/api/user-profile/types/userProfile.type';

import type { TPostComment } from './postComment.type';

type TUserForComment = Pick<TUser, 'id' | 'name'> & {
  readonly user_profile?: Pick<TUserProfile, 'avatar_key'> | null;
};

export type TPostCommentWithUser = TPostComment & {
  readonly deleted_at?: Date | null;
  readonly deleted_by?: string | null;

  readonly user: TUserForComment;
};
