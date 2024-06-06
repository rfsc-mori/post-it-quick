import { Injectable } from '@nestjs/common';
import { ForbiddenAction } from 'exceptions/api/authorization/ForbiddenAction.exception';
import { UserNotFoundException } from 'exceptions/api/user/UserNotFound.exception';
import type { TRequestUser } from 'modules/api/authentication/types/requestUser.type';
import { AuthorizationGrant } from 'modules/api/authorization/constants/authorizationGrant.constant';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { UserRepository } from 'modules/database/repository/user/UserRepository';

@Injectable()
export class DeleteUserService {
  constructor(
    private readonly authorization: AuthorizationGrant,
    private readonly user_repository: UserRepository,
  ) {}

  async run(user: TRequestUser, target_id: string): Promise<void> {
    this.authorize(user, target_id);

    const target_exists = !!(await this.user_repository.findById(target_id));

    if (!target_exists) {
      throw new UserNotFoundException();
    }

    await this.user_repository.deleteById(target_id);
  }

  private authorize(user: TRequestUser, target_id: string): void {
    const acl_query = this.authorization.can(user.roles);

    const permissions =
      user.id === target_id
        ? acl_query.deleteOwn(AUTHORIZATION_RESOURCE.USER)
        : acl_query.deleteAny(AUTHORIZATION_RESOURCE.USER);

    if (!permissions.granted) {
      throw new ForbiddenAction();
    }
  }
}
