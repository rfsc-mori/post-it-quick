import { postCreatedAt } from '../decorators/dto/postCreatedAt.decorator';
import { postDescription } from '../decorators/dto/postDescription.decorator';
import { postId } from '../decorators/dto/postId.decorator';
import { postTitle } from '../decorators/dto/postTitle.decorator';
import { postUpdatedAt } from '../decorators/dto/postUpdatedAt.decorator';
import { postUserId } from '../decorators/dto/postUserId.decorator';
import { postVersion } from '../decorators/dto/postVersion.decorator';
import type { TPost } from '../types/post.type';

export class PostDto implements TPost {
  @postId()
  readonly id: string;

  @postUserId()
  readonly user_id: string;

  @postTitle()
  readonly title: string;

  @postDescription()
  readonly description: string;

  @postVersion()
  readonly version: number;

  @postCreatedAt()
  readonly created_at: Date;

  @postUpdatedAt()
  readonly updated_at: Date;
}
