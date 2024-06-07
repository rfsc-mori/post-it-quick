import { Injectable } from '@nestjs/common';
import { PostNotFoundException } from 'exceptions/api/post/PostNotFound.exception';
import type { TRequestUser } from 'modules/api/authentication/types/requestUser.type';
import { PostRepository } from 'modules/database/repository/post/PostRepository';
import { PostCommentRepository } from 'modules/database/repository/post-comment/PostCommentRepository';

import type { TCreatePostComment } from '../../types/createPostComment.type';
import type { TPostComment } from '../../types/postComment.type';

@Injectable()
export class AddPostCommentService {
  constructor(
    private readonly post_repository: PostRepository,
    private readonly post_comment_repository: PostCommentRepository,
  ) {}

  async run(
    user: TRequestUser,
    target_id: string,
    data: TCreatePostComment,
  ): Promise<TPostComment> {
    const post = await this.post_repository.findById(target_id);

    if (!post) {
      throw new PostNotFoundException();
    }

    return await this.post_comment_repository.create(user.id, target_id, data);
  }
}
