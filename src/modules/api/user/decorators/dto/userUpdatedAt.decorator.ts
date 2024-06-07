import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { USER_DESCRIPTION_MESSAGES } from 'messages/description/api/user/userDescriptionMessages.constant';

export function userUpdatedAt(): PropertyDecorator {
  return applyDecorators(
    ApiProperty({
      description: USER_DESCRIPTION_MESSAGES.USER_UPDATED_AT,
      example: USER_DESCRIPTION_MESSAGES.EXAMPLE_USER_UPDATED_AT,
    }),
  );
}
