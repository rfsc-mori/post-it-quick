import { Injectable } from '@nestjs/common';
import { ForbiddenAction } from 'exceptions/api/authorization/ForbiddenAction.exception';
import { PostCommentNotFoundException } from 'exceptions/api/post-comment/PostCommentNotFound.exception';
import type { TRequestUser } from 'modules/api/authentication/types/requestUser.type';
import { AuthorizationGrant } from 'modules/api/authorization/constants/authorizationGrant.constant';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { PostCommentRepository } from 'modules/database/repository/post-comment/PostCommentRepository';

import type { TPostComment } from '../../types/postComment.type';
import type { TUpdatePostComment } from '../../types/updatePostComment.type';

@Injectable()
export class UpdatePostCommentService {
  constructor(
    private readonly authorization: AuthorizationGrant,
    private readonly post_comment_repository: PostCommentRepository,
  ) {}

  async run(
    user: TRequestUser,
    target_id: string,
    data: TUpdatePostComment,
  ): Promise<TPostComment> {
    const comment = await this.post_comment_repository.findById(target_id);

    if (!comment) {
      throw new PostCommentNotFoundException();
    }

    this.authorize(user, comment);

    return await this.post_comment_repository.update(target_id, data);
  }

  private authorize(user: TRequestUser, target: TPostComment): void {
    const acl_query = this.authorization.can(user.roles);

    const permissions =
      user.id === target.user_id
        ? acl_query.updateOwn(AUTHORIZATION_RESOURCE.POST_COMMENT)
        : acl_query.updateAny(AUTHORIZATION_RESOURCE.POST_COMMENT);

    if (!permissions.granted) {
      throw new ForbiddenAction();
    }
  }
}
