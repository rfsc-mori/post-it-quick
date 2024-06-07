import { postCommentDescription } from '../decorators/dto/postCommentDescription.decorator';
import type { TUpdatePostComment } from '../types/updatePostComment.type';

export class UpdatePostCommentDto implements TUpdatePostComment {
  @postCommentDescription()
  readonly description: string;
}
