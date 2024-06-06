import { Delete, HttpCode, HttpStatus, Param, Req } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { accessTokenWithAuthorization } from 'modules/api/authorization/decorators/accessTokenWithAuthorization.decorator';

import { postController } from '../../decorators/postController.decorator';
import { PostIdParamDto } from '../../dto/param/PostIdParam.dto';
import { deletePost } from './decorators/deletePost.decorator';
import { DeletePostService } from './DeletePost.service';

@postController()
export class DeletePostController {
  constructor(private readonly delete_post: DeletePostService) {}

  @Delete(':post_id')
  @deletePost()
  @HttpCode(HttpStatus.NO_CONTENT)
  @accessTokenWithAuthorization()
  async post(
    @Req() { user }: TAuthenticatedRequest,
    @Param() { post_id }: PostIdParamDto,
  ): Promise<void> {
    await this.delete_post.run(user, post_id);
  }
}
