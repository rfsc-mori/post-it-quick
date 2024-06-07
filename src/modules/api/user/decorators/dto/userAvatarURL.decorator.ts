import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { USER_DESCRIPTION_MESSAGES } from 'messages/description/api/user/userDescriptionMessages.constant';

export function userAvatarURL(): PropertyDecorator {
  return applyDecorators(
    ApiProperty({
      description: USER_DESCRIPTION_MESSAGES.USER_AVATAR_URL,
      example: USER_DESCRIPTION_MESSAGES.EXAMPLE_USER_AVATAR_URL,
      type: String,
    }),
  );
}
