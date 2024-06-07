import { Body, Param, Post, Req } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';
import { PostIdParamDto } from 'modules/api/post/dto/param/PostIdParam.dto';

import { postReactionController } from '../../decorators/postReactionController.decorator';
import { CreatePostReactionDto } from '../../dto/CreatePostReaction.dto';
import type { PostReactionStatsDto } from '../../dto/PostReactionStats.dto';
import { AddPostReactionService } from './AddPostReaction.service';
import { addPostReaction } from './decorators/addPostReaction.decorator';

@postReactionController()
export class AddPostReactionController {
  constructor(private readonly add_post_reaction: AddPostReactionService) {}

  @Post(':post_id')
  @addPostReaction()
  @authorize(
    {
      resource: AUTHORIZATION_RESOURCE.POST_REACTION,
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
    @Body() data: CreatePostReactionDto,
  ): Promise<PostReactionStatsDto> {
    return await this.add_post_reaction.run(user, target_id, data);
  }
}
