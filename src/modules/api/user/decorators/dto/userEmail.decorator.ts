import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { USER_DESCRIPTION_MESSAGES } from 'messages/description/api/user/userDescriptionMessages.constant';
import { USER_ERROR_MESSAGES } from 'messages/error/api/user/userErrorMessages.constant';

export function userEmail(): PropertyDecorator {
  return applyDecorators(
    MaxLength(100, { message: USER_ERROR_MESSAGES.USER_EMAIL_TOO_LONG }),
    MinLength(1, { message: USER_ERROR_MESSAGES.USER_EMAIL_TOO_SHORT }),

    IsEmail({}, { message: USER_ERROR_MESSAGES.USER_EMAIL_INVALID }),

    ApiProperty({
      description: USER_DESCRIPTION_MESSAGES.USER_EMAIL,
      example: USER_DESCRIPTION_MESSAGES.EXAMPLE_USER_EMAIL,
    }),
  );
}
