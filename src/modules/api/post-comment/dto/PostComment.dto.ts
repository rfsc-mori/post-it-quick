import { postId } from 'modules/api/post/decorators/dto/postId.decorator';

import { postCommentCreatedAt } from '../decorators/dto/postCommentCreatedAt.decorator';
import { postCommentDescription } from '../decorators/dto/postCommentDescription.decorator';
import { postCommentId } from '../decorators/dto/postCommentId.decorator';
import { postCommentUpdatedAt } from '../decorators/dto/postCommentUpdatedAt.decorator';
import { postCommentUserId } from '../decorators/dto/postCommentUserId.decorator';
import type { TPostComment } from '../types/postComment.type';

export class PostCommentDto implements TPostComment {
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
}
