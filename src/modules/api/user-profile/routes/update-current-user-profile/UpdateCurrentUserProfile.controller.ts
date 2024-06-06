import { Body, HttpCode, HttpStatus, Patch, Req } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';

import { userProfileController } from '../../decorators/userProfileController.decorator';
import { UpdateUserProfileDto } from '../../dto/UpdateUserProfile.dto';
import { UpdateUserProfileService } from '../update-user-profile/UpdateUserProfile.service';
import { updateCurrentUserProfile } from './decorators/updateCurrentUserProfile.decorator';

@userProfileController()
export class UpdateCurrentUserProfileController {
  constructor(private readonly update_user_profile: UpdateUserProfileService) {}

  @Patch()
  @updateCurrentUserProfile()
  @HttpCode(HttpStatus.NO_CONTENT)
  @authorize({
    resource: AUTHORIZATION_RESOURCE.PROFILE,
    action: 'update',
    possession: 'own',
  })
  async post(
    @Req() { user }: TAuthenticatedRequest,
    @Body() data: UpdateUserProfileDto,
  ): Promise<void> {
    return await this.update_user_profile.run(user, user.id, data);
  }
}
