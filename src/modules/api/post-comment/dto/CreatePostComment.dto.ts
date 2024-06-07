import { postCommentDescription } from '../decorators/dto/postCommentDescription.decorator';
import type { TCreatePostComment } from '../types/createPostComment.type';

export class CreatePostCommentDto implements TCreatePostComment {
  @postCommentDescription()
  readonly description: string;
}
