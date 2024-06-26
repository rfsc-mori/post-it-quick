import { Injectable } from '@nestjs/common';
import { ForbiddenAction } from 'exceptions/api/authorization/ForbiddenAction.exception';
import { PostNotFoundException } from 'exceptions/api/post/PostNotFound.exception';
import type { TRequestUser } from 'modules/api/authentication/types/requestUser.type';
import { AuthorizationGrant } from 'modules/api/authorization/constants/authorizationGrant.constant';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { PostRepository } from 'modules/database/repository/post/PostRepository';

import type { TPost } from '../../types/post.type';
import type { TUpdatePost } from '../../types/updatePost.type';

@Injectable()
export class UpdatePostService {
  constructor(
    private readonly authorization: AuthorizationGrant,
    private readonly post_repository: PostRepository,
  ) {}

  async run(
    user: TRequestUser,
    target_id: string,
    data: TUpdatePost,
  ): Promise<void> {
    const old_post = await this.post_repository.findById(target_id);

    if (!old_post) {
      throw new PostNotFoundException();
    }

    this.authorize(user, old_post);

    await this.post_repository.addToHistory(target_id, old_post);

    await this.post_repository.update(target_id, {
      title: data.title,
      description: data.description,
    });

    await this.post_repository.incrementVersion(target_id);
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
