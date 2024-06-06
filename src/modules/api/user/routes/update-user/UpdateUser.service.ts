import { Injectable } from '@nestjs/common';
import { ForbiddenAction } from 'exceptions/api/authorization/ForbiddenAction.exception';
import { UserNotFoundException } from 'exceptions/api/user/UserNotFound.exception';
import type { TRequestUser } from 'modules/api/authentication/types/requestUser.type';
import { AuthorizationGrant } from 'modules/api/authorization/constants/authorizationGrant.constant';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { UserRepository } from 'modules/database/repository/user/UserRepository';

import type { TUpdateUser } from '../../types/updateUser.type';

@Injectable()
export class UpdateUserService {
  constructor(
    private readonly authorization: AuthorizationGrant,
    private readonly user_repository: UserRepository,
  ) {}

  async run(
    user: TRequestUser,
    target_id: string,
    data: TUpdateUser,
  ): Promise<void> {
    this.authorize(user, target_id);

    const user_exists = await this.user_repository.findById(target_id);

    if (!user_exists) {
      throw new UserNotFoundException();
    }

    await this.user_repository.updateById(target_id, data);
  }

  private authorize(user: TRequestUser, target_id: string): void {
    const acl_query = this.authorization.can(user.roles);

    const permissions =
      user.id === target_id
        ? acl_query.updateOwn(AUTHORIZATION_RESOURCE.USER)
        : acl_query.updateAny(AUTHORIZATION_RESOURCE.USER);

    if (!permissions.granted) {
      throw new ForbiddenAction();
    }
  }
}
