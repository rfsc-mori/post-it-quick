import { postCreatedAt } from '../decorators/dto/postCreatedAt.decorator';
import { postDescription } from '../decorators/dto/postDescription.decorator';
import { postId } from '../decorators/dto/postId.decorator';
import { postImageKey } from '../decorators/dto/postImageKey.decorator';
import { postImageURL } from '../decorators/dto/postImageURL.decorator';
import { postTitle } from '../decorators/dto/postTitle.decorator';
import { postUpdatedAt } from '../decorators/dto/postUpdatedAt.decorator';
import { postUserId } from '../decorators/dto/postUserId.decorator';
import { postVersion } from '../decorators/dto/postVersion.decorator';
import { postViews } from '../decorators/dto/postViews.decorator';
import type { TPostWithImageUrl } from '../types/postWithImageUrl.type';

export class PostWithImageUrlDto implements TPostWithImageUrl {
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

  @postImageKey()
  readonly image_key: string | null;

  @postViews()
  readonly views: number;

  @postCreatedAt()
  readonly created_at: Date;

  @postUpdatedAt()
  readonly updated_at: Date;

  @postImageURL()
  readonly image_url?: URL | null;
}
