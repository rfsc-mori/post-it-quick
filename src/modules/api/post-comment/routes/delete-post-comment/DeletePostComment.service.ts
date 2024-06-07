import { Injectable } from '@nestjs/common';
import { ForbiddenAction } from 'exceptions/api/authorization/ForbiddenAction.exception';
import { PostCommentNotFoundException } from 'exceptions/api/post-comment/PostCommentNotFound.exception';
import type { TRequestUser } from 'modules/api/authentication/types/requestUser.type';
import { AuthorizationGrant } from 'modules/api/authorization/constants/authorizationGrant.constant';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import type { TPost } from 'modules/api/post/types/post.type';
import { PostRepository } from 'modules/database/repository/post/PostRepository';
import { PostCommentRepository } from 'modules/database/repository/post-comment/PostCommentRepository';

import type { TPostComment } from '../../types/postComment.type';

@Injectable()
export class DeletePostCommentService {
  constructor(
    private readonly authorization: AuthorizationGrant,
    private readonly post_repository: PostRepository,
    private readonly post_comment_repository: PostCommentRepository,
  ) {}

  async run(user: TRequestUser, target_id: string): Promise<void> {
    const comment = await this.post_comment_repository.findById(target_id);

    if (!comment) {
      throw new PostCommentNotFoundException();
    }

    const post = await this.post_repository.findById(comment.post_id);

    if (!post) {
      throw new PostCommentNotFoundException();
    }

    this.authorize(user, post, comment);

    await this.post_comment_repository.softDelete(target_id, user.id);
  }

  private authorize(
    user: TRequestUser,
    post: TPost,
    comment: TPostComment,
  ): void {
    const acl_query = this.authorization.can(user.roles);

    if (user.id === comment.user_id) {
      const permissions = acl_query.deleteOwn(
        AUTHORIZATION_RESOURCE.POST_COMMENT,
      );

      if (!permissions.granted) {
        throw new ForbiddenAction();
      }
    } else if (user.id === post.user_id) {
      const permissions = acl_query.deleteAny(
        AUTHORIZATION_RESOURCE.POST_COMMENT,
      );

      if (!permissions.granted) {
        throw new ForbiddenAction();
      }
    } else {
      throw new ForbiddenAction();
    }
  }
}
