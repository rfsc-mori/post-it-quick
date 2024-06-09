import type { TUser } from 'modules/api/user/types/user.type';
import type { TUserWithProfile } from 'modules/api/user/types/userWithProfile.type';

import type { TPostComment } from './postComment.type';

export type TPostCommentForListing = TPostComment & {
  readonly user: Pick<TUser, 'name'> & Pick<TUserWithProfile, 'avatar_url'>;
};
