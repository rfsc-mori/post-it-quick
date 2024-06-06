import { Injectable } from '@nestjs/common';
import type { TUserCredentials } from 'modules/api/user-credentials/types/userCredentials.type';
import { PrismaService } from 'modules/database/Prisma.service';

import { USER_CREDENTIALS_SELECTOR } from '../selector/user-credentials/userCredentialsSelector';

@Injectable()
export class UserCredentialsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByUserId(user_id: string): Promise<TUserCredentials | null> {
    const user_credentails = await this.prisma.userCredentials.findUnique({
      where: { user_id },
      select: USER_CREDENTIALS_SELECTOR,
    });

    return user_credentails;
  }
}
