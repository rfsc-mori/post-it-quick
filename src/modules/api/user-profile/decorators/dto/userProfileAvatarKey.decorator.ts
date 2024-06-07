import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { USER_PROFILE_DESCRIPTION_MESSAGES } from 'messages/description/api/user-profile/userProfileDescriptionMessages.constant';

export function userProfileAvatarKey(): PropertyDecorator {
  return applyDecorators(
    ApiProperty({
      description: USER_PROFILE_DESCRIPTION_MESSAGES.AVATAR_KEY,
      example: USER_PROFILE_DESCRIPTION_MESSAGES.EXAMPLE_AVATAR_KEY,
    }),
  );
}
