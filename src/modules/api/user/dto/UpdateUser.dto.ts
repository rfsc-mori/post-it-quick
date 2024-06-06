import { optionalNotNull } from 'modules/api/decorators/dto/optionalNotNull.decorator';

import { userName } from '../decorators/dto/userName.decorator';
import type { TUpdateUser } from '../types/updateUser.type';

export class UpdateUserDto implements TUpdateUser {
  @userName(optionalNotNull())
  readonly name?: string;
}
