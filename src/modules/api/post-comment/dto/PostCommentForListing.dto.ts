import { postId } from 'modules/api/post/decorators/dto/postId.decorator';
import { userAvatarURL } from 'modules/api/user/decorators/dto/userAvatarURL.decorator';
import { userName } from 'modules/api/user/decorators/dto/userName.decorator';

import { postAuthor } from '../decorators/dto/postAuthor.decorator';
import { postCommentCreatedAt } from '../decorators/dto/postCommentCreatedAt.decorator';
import { postCommentDescription } from '../decorators/dto/postCommentDescription.decorator';
import { postCommentId } from '../decorators/dto/postCommentId.decorator';
import { postCommentUpdatedAt } from '../decorators/dto/postCommentUpdatedAt.decorator';
import { postCommentUserId } from '../decorators/dto/postCommentUserId.decorator';
import type { TPostCommentForListing } from '../types/postCommentForListing.type';

type TPostCommentAuthor = TPostCommentForListing['user'];

export class PostCommentAuthorDto implements TPostCommentAuthor {
  @userName()
  readonly name: string;

  @userAvatarURL()
  readonly avatar_url?: URL | null | undefined;
}

export class PostCommentForListingDto implements TPostCommentForListing {
  @postCommentId()
  readonly id: string;

  @postId()
  readonly post_id: string;

  @postCommentUserId()
  readonly user_id: string;

  @postCommentDescription()
  readonly description: string;

  @postCommentCreatedAt()
  readonly created_at: Date;

  @postCommentUpdatedAt()
  readonly updated_at: Date;

  @postAuthor()
  readonly user: PostCommentAuthorDto;
}
