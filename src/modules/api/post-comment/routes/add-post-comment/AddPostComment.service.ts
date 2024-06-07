import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PostNotFoundException } from 'exceptions/api/post/PostNotFound.exception';
import type { TRequestUser } from 'modules/api/authentication/types/requestUser.type';
import { PostRepository } from 'modules/database/repository/post/PostRepository';
import { PostCommentRepository } from 'modules/database/repository/post-comment/PostCommentRepository';
import { EVENT } from 'modules/events/constants/event.constant';

import type { TCreatePostComment } from '../../types/createPostComment.type';
import type { TPostComment } from '../../types/postComment.type';

@Injectable()
export class AddPostCommentService {
  constructor(
    private readonly post_repository: PostRepository,
    private readonly post_comment_repository: PostCommentRepository,
    private readonly event: EventEmitter2,
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

    const comment = await this.post_comment_repository.create(
      user.id,
      target_id,
      data,
    );

    await this.event.emitAsync(EVENT.API.POST_COMMENT.NEW, post, comment);

    return comment;
  }
}
