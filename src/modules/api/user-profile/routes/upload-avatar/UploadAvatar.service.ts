import { Injectable, Logger } from '@nestjs/common';
import { ForbiddenAction } from 'exceptions/api/authorization/ForbiddenAction.exception';
import { EmptyAvatarUploadException } from 'exceptions/api/user-profile/EmptyAvatarUpload.exception';
import type { TRequestUser } from 'modules/api/authentication/types/requestUser.type';
import { AuthorizationGrant } from 'modules/api/authorization/constants/authorizationGrant.constant';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { UserProfileRepository } from 'modules/database/repository/user-profile/UserProfileRepository';
import { AvatarProcessor } from 'modules/image/processor/avatar/AvatarProcessor';
import { S3Service } from 'modules/s3/S3.service';

@Injectable()
export class UploadAvatarService {
  private readonly logger = new Logger(UploadAvatarService.name);

  constructor(
    private readonly authorization: AuthorizationGrant,
    private readonly avatar_processor: AvatarProcessor,
    private readonly s3: S3Service,
    private readonly user_profile_repository: UserProfileRepository,
  ) {}

  async run(user: TRequestUser, avatar?: Express.Multer.File): Promise<void> {
    if (!avatar) {
      throw new EmptyAvatarUploadException();
    }

    this.authorize(user);

    const profile = await this.user_profile_repository.findByUserId(user.id);

    if (profile?.avatar_key) {
      await this.s3.deleteByKey(profile.avatar_key).catch((error: Error) => {
        this.logger.error(error);
      });
    }

    const processed_avatar = await this.avatar_processor.run(avatar.buffer);

    const key = await this.s3.uploadAvatar(user.id, processed_avatar);

    await this.user_profile_repository.updateByUserId(user.id, {
      avatar_key: key,
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
