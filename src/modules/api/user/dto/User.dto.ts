import type { TAuthorizationRole } from 'modules/api/authorization/constants/authorizationRole.constant';

import { userCreatedAt } from '../decorators/dto/userCreatedAt.decorator';
import { userEmail } from '../decorators/dto/userEmail.decorator';
import { userId } from '../decorators/dto/userId.decorator';
import { userName } from '../decorators/dto/userName.decorator';
import { userRoles } from '../decorators/dto/userRoles.decorator';
import { userUpdatedAt } from '../decorators/dto/userUpdatedAt.decorator';
import type { TUser } from '../types/user.type';

export class UserDto implements TUser {
  @userId()
  readonly id: string;

  @userName()
  readonly name: string;

  @userEmail()
  readonly email: string;

  @userRoles()
  readonly roles: TAuthorizationRole[];

  @userCreatedAt()
  readonly created_at: Date;

  @userUpdatedAt()
  readonly updated_at: Date;
}
