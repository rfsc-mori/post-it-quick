import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';
import { USER_DESCRIPTION_MESSAGES } from 'messages/description/api/user/userDescriptionMessages.constant';
import { USER_ERROR_MESSAGES } from 'messages/error/api/user/userErrorMessages.constant';

export function userName(): PropertyDecorator {
  return applyDecorators(
    MaxLength(100, { message: USER_ERROR_MESSAGES.USER_NAME_TOO_LONG }),
    MinLength(1, { message: USER_ERROR_MESSAGES.USER_NAME_TOO_SHORT }),

    ApiProperty({
      description: USER_DESCRIPTION_MESSAGES.USER_NAME,
      example: USER_DESCRIPTION_MESSAGES.EXAMPLE_USER_NAME,
    }),
  );
}
