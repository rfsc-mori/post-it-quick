import { Injectable, Logger } from '@nestjs/common';
import { ForbiddenAction } from 'exceptions/api/authorization/ForbiddenAction.exception';
import type { TRequestUser } from 'modules/api/authentication/types/requestUser.type';
import { AuthorizationGrant } from 'modules/api/authorization/constants/authorizationGrant.constant';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { UserProfileRepository } from 'modules/database/repository/user-profile/UserProfileRepository';
import { S3Service } from 'modules/s3/S3.service';

@Injectable()
export class DeleteAvatarService {
  private readonly logger = new Logger(DeleteAvatarService.name);

  constructor(
    private readonly authorization: AuthorizationGrant,
    private readonly s3: S3Service,
    private readonly user_profile_repository: UserProfileRepository,
  ) {}

  async run(user: TRequestUser): Promise<void> {
    this.authorize(user);

    const profile = await this.user_profile_repository.findByUserId(user.id);

    if (profile?.avatar_key) {
      await this.s3.deleteByKey(profile.avatar_key).catch((error: Error) => {
        this.logger.error(error);
      });
    }

    await this.user_profile_repository.updateByUserId(user.id, {
      avatar_key: null,
    });
  }

  private authorize(user: TRequestUser): void {
    const acl_query = this.authorization.can(user.roles);

    const permissions = acl_query.updateOwn(AUTHORIZATION_RESOURCE.PROFILE);

    if (!permissions.granted) {
      throw new ForbiddenAction();
    }
  }
}
