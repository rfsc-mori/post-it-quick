import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { USER_PROFILE_DESCRIPTION_MESSAGES } from 'messages/description/api/user-profile/userProfileDescriptionMessages.constant';

export function userProfileUpdatedAt(): PropertyDecorator {
  return applyDecorators(
    ApiProperty({
      description: USER_PROFILE_DESCRIPTION_MESSAGES.USER_PROFILE_UPDATED_AT,
      example:
        USER_PROFILE_DESCRIPTION_MESSAGES.EXAMPLE_USER_PROFILE_UPDATED_AT,
    }),
  );
}
