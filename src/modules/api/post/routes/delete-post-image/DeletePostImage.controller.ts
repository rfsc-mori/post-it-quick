import { Delete, HttpCode, HttpStatus, Param, Req } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';

import { postController } from '../../decorators/postController.decorator';
import { PostIdParamDto } from '../../dto/param/PostIdParam.dto';
import { deletePostImage } from './decorators/deletePostImage.decorator';
import { DeletePostImageService } from './DeletePostImage.service';

@postController()
export class DeletePostImageController {
  constructor(private readonly delete_post_image: DeletePostImageService) {}

  @Delete(':post_id/image')
  @deletePostImage()
  @HttpCode(HttpStatus.NO_CONTENT)
  @authorize({
    resource: AUTHORIZATION_RESOURCE.POST,
    action: 'update',
    possession: 'own',
  })
  async post(
    @Req() { user }: TAuthenticatedRequest,
    @Param() { post_id: target_id }: PostIdParamDto,
  ): Promise<void> {
    return await this.delete_post_image.run(user, target_id);
  }
}
