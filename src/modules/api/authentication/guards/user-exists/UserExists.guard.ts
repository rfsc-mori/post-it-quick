import type { CanActivate, ExecutionContext } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { AccessTokenExpiredException } from 'exceptions/api/authentication/AccessTokenExpired.exception';
import { UserRepository } from 'modules/database/repository/user/UserRepository';

import type { TAuthenticatedRequest } from '../../types/authenticatedRequest.type';

@Injectable()
export class UserExistsGuard implements CanActivate {
  constructor(private readonly user_repository: UserRepository) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { user }: TAuthenticatedRequest = context.switchToHttp().getRequest();

    if (user) {
      const user_exists = !!(await this.user_repository.findById(user.id));

      if (user_exists) {
        return true;
      }
    }

    throw new AccessTokenExpiredException();
  }
}
