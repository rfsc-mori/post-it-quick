import { Injectable } from '@nestjs/common';
import { PostNotFoundException } from 'exceptions/api/post/PostNotFound.exception';
import type { TRequestUser } from 'modules/api/authentication/types/requestUser.type';
import { PostRepository } from 'modules/database/repository/post/PostRepository';
import { PostReactionRepository } from 'modules/database/repository/post-reaction/PostReactionRepository';

import type { TDeletePostReaction } from '../../types/deletePostReaction.type';
import type { TPostReactionStats } from '../../types/postReactionStats.type';

@Injectable()
export class DeletePostReactionService {
  constructor(
    private readonly post_repository: PostRepository,
    private readonly post_reaction_repository: PostReactionRepository,
  ) {}

  async run(
    user: TRequestUser,
    target_id: string,
    data: TDeletePostReaction,
  ): Promise<TPostReactionStats> {
    const post = await this.post_repository.findById(target_id);

    if (!post) {
      throw new PostNotFoundException();
    }

    await this.post_reaction_repository.deleteUserReactionByTypeAndPostId(
      user.id,
      target_id,
      data.reaction_type,
    );

    return await this.post_reaction_repository.getReactionStats(target_id);
  }
}
