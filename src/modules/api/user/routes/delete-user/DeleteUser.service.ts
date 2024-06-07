import { Injectable, Logger } from '@nestjs/common';
import { ForbiddenAction } from 'exceptions/api/authorization/ForbiddenAction.exception';
import { UserNotFoundException } from 'exceptions/api/user/UserNotFound.exception';
import type { TRequestUser } from 'modules/api/authentication/types/requestUser.type';
import { AuthorizationGrant } from 'modules/api/authorization/constants/authorizationGrant.constant';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { UserRepository } from 'modules/database/repository/user/UserRepository';
import { UserProfileRepository } from 'modules/database/repository/user-profile/UserProfileRepository';
import { S3Service } from 'modules/s3/S3.service';

@Injectable()
export class DeleteUserService {
  private readonly logger = new Logger(DeleteUserService.name);

  constructor(
    private readonly authorization: AuthorizationGrant,
    private readonly user_repository: UserRepository,
    private readonly s3: S3Service,
    private readonly user_profile_repository: UserProfileRepository,
  ) {}

  async run(user: TRequestUser, target_id: string): Promise<void> {
    this.authorize(user, target_id);

    const target_exists = !!(await this.user_repository.findById(target_id));

    if (!target_exists) {
      throw new UserNotFoundException();
    }

    const profile = await this.user_profile_repository.findByUserId(target_id);

    if (profile?.avatar_key) {
      await this.s3.deleteByKey(profile.avatar_key).catch((error: Error) => {
        this.logger.error(error);
      });
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
