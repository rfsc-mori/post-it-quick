import { Injectable } from '@nestjs/common';
import type { TUpdateUserProfile } from 'modules/api/user-profile/types/updateUserProfile.type';
import { PrismaService } from 'modules/database/Prisma.service';

import { ID_SELECTOR } from '../selector/idSelector';

@Injectable()
export class UserProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  async updateByUserId(
    user_id: string,
    { description }: TUpdateUserProfile,
  ): Promise<void> {
    await this.prisma.userProfile.upsert({
      where: { user_id },
      update: {
        description,
      },
      create: {
        user: {
          connect: {
            id: user_id,
          },
        },
        description,
      },
      select: ID_SELECTOR,
    });
  }
}
