import { Injectable } from '@nestjs/common';
import type { TCreatePost } from 'modules/api/post/types/createPost.type';
import type { TPost } from 'modules/api/post/types/post.type';
import { PrismaService } from 'modules/database/Prisma.service';

import { POST_SELECTOR } from '../selector/post/postSelector';

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
}
