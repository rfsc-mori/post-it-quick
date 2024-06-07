import { Get, Param } from '@nestjs/common';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';

import { postController } from '../../decorators/postController.decorator';
import { PostIdParamDto } from '../../dto/param/PostIdParam.dto';
import type { PostWithImageUrlDto } from '../../dto/PostWithImageUrl.dto';
import { findPost } from './decorators/findPost.decorator';
import { FindPostService } from './FindPost.service';

@postController()
export class FindPostController {
  constructor(private readonly find_post: FindPostService) {}

  @Get(':post_id')
  @findPost()
  @authorize({
    resource: AUTHORIZATION_RESOURCE.POST,
    action: 'read',
    possession: 'any',
  })
  async get(
    @Param() { post_id: target_id }: PostIdParamDto,
  ): Promise<PostWithImageUrlDto> {
    return await this.find_post.run(target_id);
  }
}
