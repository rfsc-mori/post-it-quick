import type { TReactionType } from '../constants/reactionType.constant';

export type TPostReactionStats = {
  readonly post_id: string;
  readonly reactions: Readonly<Record<TReactionType, number>>;
};
