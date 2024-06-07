import { Injectable } from '@nestjs/common';
import type { TCreatePost } from 'modules/api/post/types/createPost.type';
import type { TPost } from 'modules/api/post/types/post.type';
import type { TUpdatePost } from 'modules/api/post/types/updatePost.type';
import { PrismaService } from 'modules/database/Prisma.service';

import { ID_SELECTOR } from '../../selector/idSelector';
import { POST_SELECTOR } from '../../selector/post/postSelector';

@Injectable()
export class PostRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(author_id: string, data: TCreatePost): Promise<TPost> {
    return await this.prisma.post.create({
      data: {
        title: data.title,
        description: data.description,

        user: {
          connect: {
            id: author_id,
          },
        },
      },
      select: POST_SELECTOR,
    });
  }

  async addToHistory(post_id: string, data: TPost): Promise<void> {
    await this.prisma.postHistory.create({
      data: {
        title: data.title,
        description: data.description,

        version: data.version,

        post: {
          connect: {
            id: post_id,
          },
        },
      },
      select: ID_SELECTOR,
    });
  }

  async findById(post_id: string): Promise<TPost | null> {
    return await this.prisma.post.findUnique({
      where: { id: post_id },
      select: POST_SELECTOR,
    });
  }

  async delete(post_id: string): Promise<void> {
    await this.prisma.post.delete({
      where: { id: post_id },
      select: ID_SELECTOR,
    });
  }

  async update(post_id: string, data: TUpdatePost): Promise<void> {
    await this.prisma.post.update({
      where: { id: post_id },
      data: {
        title: data.title,
        description: data.description,
        version: { increment: 1 },
      },
      select: ID_SELECTOR,
    });
  }

  async incrementVersion(post_id: string): Promise<void> {
    await this.prisma.post.update({
      where: { id: post_id },
      data: { version: { increment: 1 } },
      select: ID_SELECTOR,
    });
  }

  async updateImageKey(
    post_id: string,
    image_key: string | null,
  ): Promise<void> {
    await this.prisma.post.update({
      where: { id: post_id },
      data: { image_key },
      select: ID_SELECTOR,
    });
  }
}
