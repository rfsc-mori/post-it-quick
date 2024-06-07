import { postDescription } from '../decorators/dto/postDescription.decorator';
import { postTitle } from '../decorators/dto/postTitle.decorator';
import type { TUpdatePost } from '../types/updatePost.type';

export class UpdatePostDto implements TUpdatePost {
  @postTitle()
  readonly title: string;

  @postDescription()
  readonly description: string;
}
