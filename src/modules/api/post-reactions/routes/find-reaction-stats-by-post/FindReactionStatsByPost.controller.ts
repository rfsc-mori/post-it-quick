import { Get, Param } from '@nestjs/common';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';
import { PostIdParamDto } from 'modules/api/post/dto/param/PostIdParam.dto';

import { postReactionController } from '../../decorators/postReactionController.decorator';
import type { PostReactionStatsDto } from '../../dto/PostReactionStats.dto';
import { findReactionStatsByPost } from './decorators/findReactionStatsByPost.decorator';
import { FindReactionStatsByPostService } from './FindReactionStatsByPost.service';

@postReactionController()
export class FindReactionStatsByPostController {
  constructor(
    private readonly find_reaction_stats_by_post: FindReactionStatsByPostService,
  ) {}

  @Get(':post_id')
  @findReactionStatsByPost()
  @authorize(
    {
      resource: AUTHORIZATION_RESOURCE.POST_REACTION,
      action: 'read',
      possession: 'any',
    },
    {
      resource: AUTHORIZATION_RESOURCE.POST,
      action: 'read',
      possession: 'any',
    },
  )
  async get(
    @Param() { post_id: target_id }: PostIdParamDto,
  ): Promise<PostReactionStatsDto> {
    return await this.find_reaction_stats_by_post.run(target_id);
  }
}
