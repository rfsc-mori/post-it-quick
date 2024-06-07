import { postId } from '../../decorators/dto/postId.decorator';
import type { TPost } from '../../types/post.type';

export class PostIdParamDto {
  @postId()
  readonly post_id: TPost['id'];
}
