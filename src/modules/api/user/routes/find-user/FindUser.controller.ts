import { Get, Param } from '@nestjs/common';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';

import { userController } from '../../decorators/userController.decorator';
import { UserIdParamDto } from '../../dto/param/UserIdParam.dto';
import type { UserWithProfileDto } from '../../dto/UserWithProfile.dto';
import { findUser } from './decorators/findUser.decorator';
import { FindUserService } from './FindUser.service';

@userController()
export class FindUserController {
  constructor(private readonly find_user: FindUserService) {}

  @Get(':user_id')
  @findUser()
  @authorize({
    resource: AUTHORIZATION_RESOURCE.USER,
    action: 'read',
    possession: 'any',
  })
  async get(
    @Param() { user_id: target_id }: UserIdParamDto,
  ): Promise<UserWithProfileDto> {
    return await this.find_user.run(target_id);
  }
}
