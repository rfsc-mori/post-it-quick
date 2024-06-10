import type { TUser } from 'modules/api/user/types/user.type';
import type { TUserWithProfile } from 'modules/api/user/types/userWithProfile.type';

import type { TPostComment } from './postComment.type';

type TUserForCommentForListing = Pick<TUser, 'name'> &
  Pick<TUserWithProfile, 'avatar_url'>;

export type TPostCommentForListing = Omit<TPostComment, 'user_id'> & {
  readonly user_id?: string | null;
  readonly user?: TUserForCommentForListing | null;
};
