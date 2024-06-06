import { postDescription } from '../decorators/dto/postDescription.decorator';
import { postTitle } from '../decorators/dto/postTitle.decorator';
import type { TCreatePost } from '../types/createPost.type';

export class CreatePostDto implements TCreatePost {
  @postTitle()
  readonly title: string;

  @postDescription()
  readonly description: string;
}
