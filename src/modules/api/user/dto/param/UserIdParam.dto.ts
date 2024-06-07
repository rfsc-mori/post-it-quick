import { userId } from '../../decorators/dto/userId.decorator';
import type { TUser } from '../../types/user.type';

export class UserIdParamDto {
  @userId()
  readonly user_id: TUser['id'];
}
