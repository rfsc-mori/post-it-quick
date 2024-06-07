import { Get, Req } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';

import { userController } from '../../decorators/userController.decorator';
import type { UserWithProfileDto } from '../../dto/UserWithProfile.dto';
import { FindUserService } from '../find-user/FindUser.service';
import { findCurrentUser } from './decorators/findCurrentUser.decorator';

@userController()
export class FindCurrentUserController {
  constructor(private readonly find_user: FindUserService) {}

  @Get()
  @findCurrentUser()
  @authorize({
    resource: AUTHORIZATION_RESOURCE.USER,
    action: 'read',
    possession: 'own',
  })
  async get(
    @Req() { user }: TAuthenticatedRequest,
  ): Promise<UserWithProfileDto> {
    return await this.find_user.run(user.id);
  }
}
