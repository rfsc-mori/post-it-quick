import { Get, Query } from '@nestjs/common';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';
import { OptionalUserIdQueryDto } from 'modules/api/user/dto/query/OptionalUserIdQuery.dto';

import { postController } from '../../decorators/postController.decorator';
import type { PostForListingWithStatsDto } from '../../dto/PostForListingWithStats.dto';
import { findAllPosts } from './decorators/findAllPosts.decorator';
import { FindAllPostsService } from './FindAllPosts.service';

@postController()
export class FindAllPostsController {
  constructor(private readonly find_all_posts: FindAllPostsService) {}

  @Get()
  @findAllPosts()
  @authorize({
    resource: AUTHORIZATION_RESOURCE.POST,
    action: 'read',
    possession: 'any',
  })
  async get(
    @Query() { user_id }: OptionalUserIdQueryDto,
  ): Promise<PostForListingWithStatsDto[]> {
    return await this.find_all_posts.run(user_id);
  }
}
