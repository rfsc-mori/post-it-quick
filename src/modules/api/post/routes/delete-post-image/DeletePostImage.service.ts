import { Injectable, Logger } from '@nestjs/common';
import { ForbiddenAction } from 'exceptions/api/authorization/ForbiddenAction.exception';
import { PostNotFoundException } from 'exceptions/api/post/PostNotFound.exception';
import type { TRequestUser } from 'modules/api/authentication/types/requestUser.type';
import { AuthorizationGrant } from 'modules/api/authorization/constants/authorizationGrant.constant';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { PostRepository } from 'modules/database/repository/post/PostRepository';
import { S3Service } from 'modules/s3/S3.service';

import type { TPost } from '../../types/post.type';

@Injectable()
export class DeletePostImageService {
  private readonly logger = new Logger(DeletePostImageService.name);

  constructor(
    private readonly authorization: AuthorizationGrant,
    private readonly s3: S3Service,
    private readonly post_repository: PostRepository,
  ) {}

  async run(user: TRequestUser, target_id: string): Promise<void> {
    const post = await this.post_repository.findById(target_id);

    if (!post) {
      throw new PostNotFoundException();
    }

    this.authorize(user, post);

    if (post.image_key) {
      await this.s3.deleteByKey(post.image_key).catch((error: Error) => {
        this.logger.error(error);
      });
    }

    await this.post_repository.update(post.id, {
      image_key: null,
    });
  }

  private authorize(user: TRequestUser, target: TPost): void {
    const acl_query = this.authorization.can(user.roles);

    const permissions =
      user.id === target.user_id
        ? acl_query.updateOwn(AUTHORIZATION_RESOURCE.POST)
        : acl_query.updateAny(AUTHORIZATION_RESOURCE.POST);

    if (!permissions.granted) {
      throw new ForbiddenAction();
    }
  }
}
