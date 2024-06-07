import { postCommentId } from '../../decorators/dto/postCommentId.decorator';
import type { TPostComment } from '../../types/postComment.type';

export class PostCommentIdParamDto {
  @postCommentId()
  readonly comment_id: TPostComment['id'];
}
