import { Body, Param, Post, Req } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';
import { PostIdParamDto } from 'modules/api/post/dto/param/PostIdParam.dto';

import { postCommentController } from '../../decorators/postCommentController.decorator';
import { CreatePostCommentDto } from '../../dto/CreatePostComment.dto';
import type { PostCommentDto } from '../../dto/PostComment.dto';
import { AddPostCommentService } from './AddPostComment.service';
import { addPostComment } from './decorators/addPostComment.decorator';

@postCommentController()
export class AddPostCommentController {
  constructor(private readonly add_post_comment: AddPostCommentService) {}

  @Post(':post_id')
  @addPostComment()
  @authorize(
    {
      resource: AUTHORIZATION_RESOURCE.POST_COMMENT,
      action: 'create',
      possession: 'own',
    },
    {
      resource: AUTHORIZATION_RESOURCE.POST,
      action: 'read',
      possession: 'any',
    },
  )
  async post(
    @Req() { user }: TAuthenticatedRequest,
    @Param() { post_id: target_id }: PostIdParamDto,
    @Body() data: CreatePostCommentDto,
  ): Promise<PostCommentDto> {
    return await this.add_post_comment.run(user, target_id, data);
  }
}
