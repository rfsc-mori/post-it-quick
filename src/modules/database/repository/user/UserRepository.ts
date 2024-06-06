import { Injectable } from '@nestjs/common';
import { AUTHORIZATION_ROLE } from 'modules/api/authorization/constants/authorizationRole.constant';
import type { TCreateUser } from 'modules/api/user/types/createUser.type';
import type { TUser } from 'modules/api/user/types/user.type';
import { PrismaService } from 'modules/database/Prisma.service';

import { ID_SELECTOR } from '../selector/idSelector';
import { USER_SELECTOR } from '../selector/user/userSelector';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: TCreateUser): Promise<void> {
    await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,

        roles: [AUTHORIZATION_ROLE.USER],

        user_credentials: {
          create: {
            password_hash: data.password_hash,
          },
        },
      },
      select: ID_SELECTOR,
    });
  }

  async findByEmail(email: string): Promise<TUser | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: USER_SELECTOR,
    });

    return user;
  }
}
