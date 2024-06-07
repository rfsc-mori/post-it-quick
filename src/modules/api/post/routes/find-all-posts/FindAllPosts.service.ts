import { Injectable } from '@nestjs/common';
import { PostRepository } from 'modules/database/repository/post/PostRepository';
import { PostCommentRepository } from 'modules/database/repository/post-comment/PostCommentRepository';
import { PostReactionRepository } from 'modules/database/repository/post-reaction/PostReactionRepository';

import type { TPostForListingWithStats } from '../../types/postForListingWithStats.type';

@Injectable()
export class FindAllPostsService {
  constructor(
    private readonly post_repository: PostRepository,
    private readonly post_comment_repository: PostCommentRepository,
    private readonly post_reaction_repository: PostReactionRepository,
  ) {}

  async run(user_id?: string): Promise<TPostForListingWithStats[]> {
    const post_list = await this.post_repository.findAllForListing(user_id);

    const all_post_ids = post_list.map((post) => post.id);

    const all_comment_stats = await Promise.all(
      all_post_ids.map(async (post_id) => {
        return await this.post_comment_repository.getCommentStats(post_id);
      }),
    );

    const all_reaction_stats = await Promise.all(
      all_post_ids.map(async (post_id) => {
        return await this.post_reaction_repository.getReactionStats(post_id);
      }),
    );

    return post_list.map((post) => {
      const comment_stats = all_comment_stats.find(
        (comment_stat) => comment_stat.post_id === post.id,
      );

      const reaction_stats = all_reaction_stats.find(
        (reaction_stat) => reaction_stat.post_id === post.id,
      );

      return {
        ...post,
        comments: comment_stats?.comments || 0,
        likes: reaction_stats?.reactions.LIKE || 0,
        dislikes: reaction_stats?.reactions.DISLIKE || 0,
      };
    });
  }
}
