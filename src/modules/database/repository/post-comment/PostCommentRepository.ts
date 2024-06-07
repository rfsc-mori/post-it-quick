import { Injectable } from '@nestjs/common';
import type { TCreatePostComment } from 'modules/api/post-comment/types/createPostComment.type';
import type { TPostComment } from 'modules/api/post-comment/types/postComment.type';
import { PrismaService } from 'modules/database/Prisma.service';
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
}
