import { Delete, HttpCode, HttpStatus, Req } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';

import { userController } from '../../decorators/userController.decorator';
import { DeleteUserService } from '../delete-user/DeleteUser.service';
import { deleteCurrentUser } from './decorators/deleteCurrentUser.decorator';

@userController()
export class DeleteCurrentUserController {
  constructor(private readonly delete_user: DeleteUserService) {}

  @Delete()
  @deleteCurrentUser()
  @HttpCode(HttpStatus.NO_CONTENT)
  @authorize({
    resource: AUTHORIZATION_RESOURCE.USER,
    action: 'delete',
    possession: 'own',
  })
  async post(@Req() { user }: TAuthenticatedRequest): Promise<void> {
    return await this.delete_user.run(user, user.id);
  }
}
