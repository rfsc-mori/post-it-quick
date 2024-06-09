import { Body, Delete, Param, Req } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';
import { PostIdParamDto } from 'modules/api/post/dto/param/PostIdParam.dto';

import { postReactionController } from '../../decorators/postReactionController.decorator';
import { DeletePostReactionDto } from '../../dto/DeletePostReaction.dto';
import type { PostReactionStatsDto } from '../../dto/PostReactionStats.dto';
import { deletePostReaction } from './decorators/deletePostReaction.decorator';
import { DeletePostReactionService } from './DeletePostReaction.service';

@postReactionController()
export class DeletePostReactionController {
  constructor(
    private readonly delete_post_reaction: DeletePostReactionService,
  ) {}

  @Delete(':post_id')
  @deletePostReaction()
  @authorize(
    {
      resource: AUTHORIZATION_RESOURCE.POST_REACTION,
      action: 'delete',
      possession: 'own',
    },
    {
      resource: AUTHORIZATION_RESOURCE.POST,
      action: 'read',
      possession: 'any',
    },
  )
  async delete(
    @Req() { user }: TAuthenticatedRequest,
    @Param() { post_id: target_id }: PostIdParamDto,
    @Body() data: DeletePostReactionDto,
  ): Promise<PostReactionStatsDto> {
    return await this.delete_post_reaction.run(user, target_id, data);
  }
}
