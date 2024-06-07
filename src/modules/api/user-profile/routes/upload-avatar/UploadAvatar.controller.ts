import { HttpCode, HttpStatus, Post, Req, UploadedFile } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';
import { fileUpload } from 'modules/api/decorators/fileUpload.decorator';

import { userProfileController } from '../../decorators/userProfileController.decorator';
import { uploadAvatar } from './decorators/uploadAvatar.decorator';
import { UploadAvatarService } from './UploadAvatar.service';

@userProfileController()
export class UploadAvatarController {
  constructor(private readonly upload_avatar: UploadAvatarService) {}

  @Post('avatar')
  @fileUpload('avatar')
  @uploadAvatar()
  @HttpCode(HttpStatus.NO_CONTENT)
  @authorize({
    resource: AUTHORIZATION_RESOURCE.PROFILE,
    action: 'update',
    possession: 'own',
  })
  async post(
    @Req() { user }: TAuthenticatedRequest,
    @UploadedFile() avatar?: Express.Multer.File,
  ): Promise<void> {
    return await this.upload_avatar.run(user, avatar);
  }
}
