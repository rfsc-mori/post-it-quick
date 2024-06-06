import { Body, HttpCode, HttpStatus, Patch, Req } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';

import { userController } from '../../decorators/userController.decorator';
import { UpdateUserDto } from '../../dto/UpdateUser.dto';
import { UpdateUserService } from '../update-user/UpdateUser.service';
import { updateCurrentUser } from './decorators/updateCurrentUser.decorator';

@userController()
export class UpdateCurrentUserController {
  constructor(private readonly update_user: UpdateUserService) {}

  @Patch()
  @updateCurrentUser()
  @HttpCode(HttpStatus.NO_CONTENT)
  @authorize({
    resource: AUTHORIZATION_RESOURCE.USER,
    action: 'update',
    possession: 'own',
  })
  async post(
    @Req() { user }: TAuthenticatedRequest,
    @Body() data: UpdateUserDto,
  ): Promise<void> {
    return await this.update_user.run(user, user.id, data);
  }
}
