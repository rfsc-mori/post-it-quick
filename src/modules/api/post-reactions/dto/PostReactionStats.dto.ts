import { postId } from 'modules/api/post/decorators/dto/postId.decorator';

import type { TReactionType } from '../constants/reactionType.constant';
import { postReactionDislike } from '../decorators/dto/postReactionDislike.decorator';
import { postReactionLike } from '../decorators/dto/postReactionLike.decorator';
import { postReactions } from '../decorators/dto/postReactions.decorator';
import type { TPostReactionStats } from '../types/postReactionStats.type';

class PostReactionStatsReactionsDto implements Record<TReactionType, number> {
  @postReactionLike()
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly LIKE: number;

  @postReactionDislike()
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly DISLIKE: number;
}

export class PostReactionStatsDto implements TPostReactionStats {
  @postId()
  readonly post_id: string;

  @postReactions()
  readonly reactions: PostReactionStatsReactionsDto;
}
