import { Delete, HttpCode, HttpStatus, Req } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { accessTokenWithAuthorization } from 'modules/api/authorization/decorators/accessTokenWithAuthorization.decorator';

import { userProfileController } from '../../decorators/userProfileController.decorator';
import { deleteAvatar } from './decorators/deleteAvatar.decorator';
import { DeleteAvatarService } from './DeleteAvatar.service';

@userProfileController()
export class DeleteAvatarController {
  constructor(private readonly delete_avatar: DeleteAvatarService) {}

  @Delete('avatar')
  @deleteAvatar()
  @HttpCode(HttpStatus.NO_CONTENT)
  @accessTokenWithAuthorization()
  async post(@Req() { user }: TAuthenticatedRequest): Promise<void> {
    return await this.delete_avatar.run(user);
  }
}
