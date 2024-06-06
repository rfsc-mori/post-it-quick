import { optionalNotNull } from 'modules/api/decorators/dto/optionalNotNull.decorator';

import { userProfileDescription } from '../decorators/dto/userProfileDescription.decorator';
import type { TUpdateUserProfile } from '../types/updateUserProfile.type';

export class UpdateUserProfileDto
  implements Omit<TUpdateUserProfile, 'avatar_key'>
{
  @userProfileDescription(optionalNotNull())
  readonly description?: string;
}
