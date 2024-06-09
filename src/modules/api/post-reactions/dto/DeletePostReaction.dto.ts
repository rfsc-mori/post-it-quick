import { TReactionType } from '../constants/reactionType.constant';
import { postReactionType } from '../decorators/dto/postReactionType.decorator';
import type { TCreatePostReaction } from '../types/createPostReaction.type';

export class DeletePostReactionDto implements TCreatePostReaction {
  @postReactionType()
  readonly reaction_type: TReactionType;
}
