import { Injectable } from '@nestjs/common';
import type { TCreatePostComment } from 'modules/api/post-comment/types/createPostComment.type';
import type { TPostComment } from 'modules/api/post-comment/types/postComment.type';
import type { TUpdatePostComment } from 'modules/api/post-comment/types/updatePostComment.type';
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

  async findById(id: string): Promise<TPostComment | null> {
    return await this.prisma.comment.findUnique({
      where: { id },
      select: POST_COMMENT_SELECTOR,
    });
  }

  async update(id: string, data: TUpdatePostComment): Promise<TPostComment> {
    return await this.prisma.comment.update({
      where: { id },
      data: { description: data.description },
      select: POST_COMMENT_SELECTOR,
    });
  }
}
