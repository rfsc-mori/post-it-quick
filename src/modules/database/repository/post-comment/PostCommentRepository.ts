import { Injectable } from '@nestjs/common';
import type { TCreatePostComment } from 'modules/api/post-comment/types/createPostComment.type';
import type { TPostComment } from 'modules/api/post-comment/types/postComment.type';
import type { TPostCommentStats } from 'modules/api/post-comment/types/postCommentStats.type';
import type { TPostCommentWithUser } from 'modules/api/post-comment/types/postCommentWithUser.type';
import type { TUpdatePostComment } from 'modules/api/post-comment/types/updatePostComment.type';
import { PrismaService } from 'modules/database/Prisma.service';
import { ID_SELECTOR } from 'modules/database/selector/idSelector';
import { POST_COMMENT_SELECTOR } from 'modules/database/selector/post-comment/postCommentSelector';

@Injectable()
export class PostCommentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    author_id: string,
    post_id: string,
    data: TCreatePostComment,
  ): Promise<TPostComment> {
    return await this.prisma.comment.create({
      data: {
        description: data.description,

        user: {
          connect: {
            id: author_id,
          },
        },

        post: {
          connect: {
            id: post_id,
          },
        },
      },
      select: POST_COMMENT_SELECTOR,
    });
  }

  async findById(id: string): Promise<TPostComment | null> {
    return await this.prisma.comment.findUnique({
      where: {
        id,
        deleted_at: null,
      },
      select: POST_COMMENT_SELECTOR,
    });
  }

  async findByPostIdWithUser(post_id: string): Promise<TPostCommentWithUser[]> {
    return await this.prisma.comment.findMany({
      where: {
        post_id,
      },
      select: {
        id: true,

        post_id: true,
        user_id: true,

        description: true,

        created_at: true,
        updated_at: true,

        deleted_at: true,
        deleted_by: true,

        user: {
          select: {
            id: true,
            name: true,

            user_profile: {
              select: {
                avatar_key: true,
              },
            },
          },
        },
      },
    });
  }

  async update(id: string, data: TUpdatePostComment): Promise<TPostComment> {
    return await this.prisma.comment.update({
      where: {
        id,
        deleted_at: null,
      },
      data: { description: data.description },
      select: POST_COMMENT_SELECTOR,
    });
  }

  async softDelete(comment_id: string, user_id: string): Promise<void> {
    await this.prisma.comment.update({
      where: {
        id: comment_id,
      },
      data: {
        deleted_at: new Date(),

        deleter: {
          connect: {
            id: user_id,
          },
        },
      },
      select: ID_SELECTOR,
    });
  }

  async getCommentStats(post_id: string): Promise<TPostCommentStats> {
    const raw_stats = await this.prisma.comment.count({
      where: {
        post_id,
        deleted_at: null,
      },
    });

    return {
      post_id,
      comments: raw_stats,
    };
  }
}
