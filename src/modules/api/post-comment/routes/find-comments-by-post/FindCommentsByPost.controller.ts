import { Get, Param } from '@nestjs/common';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';
import { PostIdParamDto } from 'modules/api/post/dto/param/PostIdParam.dto';

import { postCommentController } from '../../decorators/postCommentController.decorator';
import type { PostCommentForListingDto } from '../../dto/PostCommentForListing.dto';
import { findCommentsByPost } from './decorators/findCommentsByPost.decorator';
import { FindCommentsByPostService } from './FindCommentsByPost.service';

@postCommentController()
export class FindCommentsByPostController {
  constructor(
    private readonly find_comments_by_post: FindCommentsByPostService,
  ) {}

  @Get('post/:post_id')
  @findCommentsByPost()
  @authorize({
    resource: AUTHORIZATION_RESOURCE.POST_COMMENT,
    action: 'read',
    possession: 'any',
  })
  async get(
    @Param() { post_id: target_id }: PostIdParamDto,
  ): Promise<PostCommentForListingDto[]> {
    return await this.find_comments_by_post.run(target_id);
  }
}
