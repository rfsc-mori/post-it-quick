import { postId } from 'modules/api/post/decorators/dto/postId.decorator';

import type { TReactionType } from '../constants/reactionType.constant';
import { postReactions } from '../decorators/dto/postReactions.decorator';
import type { TPostReactionStats } from '../types/postReactionStats.type';

export class PostReactionStatsDto implements TPostReactionStats {
  @postId()
  readonly post_id: string;

  @postReactions()
  readonly reactions: Readonly<Record<TReactionType, number>>;
}
