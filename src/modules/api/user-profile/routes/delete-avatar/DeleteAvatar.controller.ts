import { Delete, HttpCode, HttpStatus, Req } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';

import { userProfileController } from '../../decorators/userProfileController.decorator';
import { deleteAvatar } from './decorators/deleteAvatar.decorator';
import { DeleteAvatarService } from './DeleteAvatar.service';

@userProfileController()
export class DeleteAvatarController {
  constructor(private readonly delete_avatar: DeleteAvatarService) {}

  @Delete('avatar')
  @deleteAvatar()
  @HttpCode(HttpStatus.NO_CONTENT)
  @authorize({
    resource: AUTHORIZATION_RESOURCE.PROFILE,
    action: 'update',
    possession: 'own',
  })
  async post(@Req() { user }: TAuthenticatedRequest): Promise<void> {
    return await this.delete_avatar.run(user);
  }
}
