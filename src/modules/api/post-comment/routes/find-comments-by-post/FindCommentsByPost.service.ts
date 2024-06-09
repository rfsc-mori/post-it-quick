import { Injectable } from '@nestjs/common';
import { PostNotFoundException } from 'exceptions/api/post/PostNotFound.exception';
import { PostRepository } from 'modules/database/repository/post/PostRepository';
import { PostCommentRepository } from 'modules/database/repository/post-comment/PostCommentRepository';
import { S3Service } from 'modules/s3/S3.service';

import type { TPostCommentForListing } from '../../types/postCommentForListing.type';

@Injectable()
export class FindCommentsByPostService {
  constructor(
    private readonly post_repository: PostRepository,
    private readonly post_comment_repository: PostCommentRepository,
    private readonly s3_service: S3Service,
  ) {}

  async run(target_id: string): Promise<TPostCommentForListing[]> {
    const post = await this.post_repository.findById(target_id);

    if (!post) {
      throw new PostNotFoundException();
    }

    const comments_with_user =
      await this.post_comment_repository.findByPostIdWithUser(target_id);

    return comments_with_user.map((comment) => ({
      ...comment,
      user: {
        name: comment.user.name,
        avatar_url: comment.user.user_profile?.avatar_key
          ? this.s3_service.makePublicURL(comment.user.user_profile.avatar_key)
          : null,
      },
    }));
  }
}
