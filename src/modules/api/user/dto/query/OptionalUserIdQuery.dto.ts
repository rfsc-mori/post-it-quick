import { optionalNotNull } from 'modules/api/decorators/dto/optionalNotNull.decorator';

import { userId } from '../../decorators/dto/userId.decorator';
import type { TUser } from '../../types/user.type';

export class OptionalUserIdQueryDto {
  @userId(optionalNotNull())
  readonly user_id?: TUser['id'];
}
