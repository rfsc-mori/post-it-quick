import { Injectable } from '@nestjs/common';
import { PostNotFoundException } from 'exceptions/api/post/PostNotFound.exception';
import { PostRepository } from 'modules/database/repository/post/PostRepository';
import { S3Service } from 'modules/s3/S3.service';

import type { TPostWithImageUrl } from '../../types/postWithImageUrl.type';

@Injectable()
export class FindPostService {
  constructor(
    private readonly post_repository: PostRepository,
    private readonly s3: S3Service,
  ) {}

  async run(target_id: string): Promise<TPostWithImageUrl> {
    const post = await this.post_repository.findById(target_id);

    if (!post) {
      throw new PostNotFoundException();
    }

    const views = await this.post_repository.incrementViews(target_id);

    const image_url = post.image_key
      ? this.s3.makePublicURL(post.image_key)
      : null;

    return {
      ...post,
      views,
      image_url,
    };
  }
}
