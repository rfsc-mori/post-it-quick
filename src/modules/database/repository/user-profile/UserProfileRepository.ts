import { Injectable } from '@nestjs/common';
import type { TUpdateUserProfile } from 'modules/api/user-profile/types/updateUserProfile.type';
import type { TUserProfile } from 'modules/api/user-profile/types/userProfile.type';
import { PrismaService } from 'modules/database/Prisma.service';

import { ID_SELECTOR } from '../../selector/idSelector';
import { USER_PROFILE_SELECTOR } from '../../selector/user-profile/userProfileSelector';

@Injectable()
export class UserProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByUserId(user_id: string): Promise<TUserProfile | null> {
    return await this.prisma.userProfile.findUnique({
      where: { user_id },
      select: USER_PROFILE_SELECTOR,
    });
  }

  async updateByUserId(
    user_id: string,
    { description, avatar_key }: TUpdateUserProfile,
  ): Promise<void> {
    await this.prisma.userProfile.upsert({
      where: { user_id },
      update: {
        description,
        avatar_key,
      },
      create: {
        user: {
          connect: {
            id: user_id,
          },
        },
        description,
        avatar_key,
      },
      select: ID_SELECTOR,
    });
  }
}
