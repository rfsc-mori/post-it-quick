import { Injectable } from '@nestjs/common';
import type { TRequestUser } from 'modules/api/authentication/types/requestUser.type';
import { PostRepository } from 'modules/database/repository/post/PostRepository';

import type { TCreatePost } from '../../types/createPost.type';
import type { TPost } from '../../types/post.type';

@Injectable()
export class CreatePostService {
  constructor(private readonly post_repository: PostRepository) {}

  async run(user: TRequestUser, data: TCreatePost): Promise<TPost> {
    return await this.post_repository.create(user.id, {
      title: data.title,
      description: data.description,
    });
  }
}
