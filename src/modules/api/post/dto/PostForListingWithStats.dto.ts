import { postCommentCount } from '../decorators/dto/postCommentCount.decorator';
import { postDislikes } from '../decorators/dto/postDislikes.decorator';
import { postId } from '../decorators/dto/postId.decorator';
import { postLikes } from '../decorators/dto/postLikes.decorator';
import { postTitle } from '../decorators/dto/postTitle.decorator';
import { postUserId } from '../decorators/dto/postUserId.decorator';
import { postViews } from '../decorators/dto/postViews.decorator';
import type { TPostForListingWithStats } from '../types/postForListingWithStats.type';

export class PostForListingWithStatsDto implements TPostForListingWithStats {
  @postId()
  readonly id: string;

  @postUserId()
  readonly user_id: string;

  @postTitle()
  readonly title: string;

  @postViews()
  readonly views: number;

  @postCommentCount()
  readonly comments: number;

  @postLikes()
  readonly likes: number;

  @postDislikes()
  readonly dislikes: number;
}
