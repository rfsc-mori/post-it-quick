import type { TReactionType } from '../constants/reactionType.constant';

export type TPostReaction = {
  readonly id: string;

  readonly user_id: string;
  readonly post_id: string;

  readonly reaction_type: TReactionType;

  readonly created_at: Date;
  readonly updated_at: Date;
};
