import { Injectable } from '@nestjs/common';
import type { TReactionType } from 'modules/api/post-reactions/constants/reactionType.constant';
import { REACTION_TYPE } from 'modules/api/post-reactions/constants/reactionType.constant';
import type { TCreatePostReaction } from 'modules/api/post-reactions/types/createPostReaction.type';
import type { TPostReactionStats } from 'modules/api/post-reactions/types/postReactionStats.type';
import { PrismaService } from 'modules/database/Prisma.service';
import { ID_SELECTOR } from 'modules/database/selector/idSelector';

@Injectable()
export class PostReactionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    user_id: string,
    post_id: string,
    data: TCreatePostReaction,
  ): Promise<void> {
    await this.prisma.postReaction.create({
      data: {
        reaction_type: data.reaction_type,

        user: {
          connect: {
            id: user_id,
          },
        },

        post: {
          connect: {
            id: post_id,
          },
        },
      },
      select: ID_SELECTOR,
    });
  }

  async userReactionExistsByTypeAndPostId(
    user_id: string,
    post_id: string,
    reaction_type: TReactionType,
  ): Promise<boolean> {
    return !!(await this.prisma.postReaction.findFirst({
      where: {
        user_id,
        post_id,
        reaction_type,
      },
      select: ID_SELECTOR,
    }));
  }

  async deleteUserReactionByTypeAndPostId(
    user_id: string,
    post_id: string,
    reaction_type: TReactionType,
  ): Promise<void> {
    await this.prisma.postReaction.deleteMany({
      where: {
        user_id,
        post_id,
        reaction_type,
      },
    });
  }

  async getReactionStats(post_id: string): Promise<TPostReactionStats> {
    const raw_stats = await this.prisma.postReaction.groupBy({
      by: ['post_id', 'reaction_type'],
      where: {
        post_id,
      },
      _count: {
        reaction_type: true,
      },
    });

    const by_reaction: Record<TReactionType, number> = {
      [REACTION_TYPE.LIKE]: 0,
      [REACTION_TYPE.DISLIKE]: 0,
    };

    for (const raw_stat of raw_stats) {
      by_reaction[raw_stat.reaction_type as TReactionType] =
        raw_stat._count.reaction_type;
    }

    return {
      post_id,
      reactions: by_reaction,
    };
  }
}
