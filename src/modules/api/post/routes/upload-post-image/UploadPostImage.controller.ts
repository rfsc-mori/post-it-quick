import { Param, Post, Req, UploadedFile } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { accessTokenWithAuthorization } from 'modules/api/authorization/decorators/accessTokenWithAuthorization.decorator';
import { fileUpload } from 'modules/api/decorators/fileUpload.decorator';

import { postController } from '../../decorators/postController.decorator';
import { PostIdParamDto } from '../../dto/param/PostIdParam.dto';
import type { PostWithImageUrlDto } from '../../dto/PostWithImageUrl.dto';
import { uploadPostImage } from './decorators/uploadPostImage.decorator';
import { UploadPostImageService } from './UploadPostImage.service';

@postController()
export class UploadPostImageController {
  constructor(private readonly upload_post_image: UploadPostImageService) {}

  @Post(':post_id/image')
  @fileUpload('image')
  @uploadPostImage()
  @accessTokenWithAuthorization()
  async post(
    @Req() { user }: TAuthenticatedRequest,
    @Param() { post_id: target_id }: PostIdParamDto,
    @UploadedFile() image?: Express.Multer.File,
  ): Promise<PostWithImageUrlDto> {
    return await this.upload_post_image.run(user, target_id, image);
  }
}
