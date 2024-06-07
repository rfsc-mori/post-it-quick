import { Body, HttpCode, HttpStatus, Param, Post, Req } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { accessTokenWithAuthorization } from 'modules/api/authorization/decorators/accessTokenWithAuthorization.decorator';

import { postController } from '../../decorators/postController.decorator';
import { PostIdParamDto } from '../../dto/param/PostIdParam.dto';
import { UpdatePostDto } from '../../dto/UpdatePost.dto';
import { updatePost } from './decorators/updatePost.decorator';
import { UpdatePostService } from './UpdatePost.service';

@postController()
export class UpdatePostController {
  constructor(private readonly update_post: UpdatePostService) {}

  @Post(':post_id')
  @updatePost()
  @HttpCode(HttpStatus.NO_CONTENT)
  @accessTokenWithAuthorization()
  async post(
    @Req() { user }: TAuthenticatedRequest,
    @Param() { post_id }: PostIdParamDto,
    @Body() data: UpdatePostDto,
  ): Promise<void> {
    await this.update_post.run(user, post_id, data);
  }
}
