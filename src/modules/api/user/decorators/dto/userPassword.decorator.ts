import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';
import { USER_DESCRIPTION_MESSAGES } from 'messages/description/api/user/userDescriptionMessages.constant';
import { USER_ERROR_MESSAGES } from 'messages/error/api/user/userErrorMessages.constant';
import { PASSWORD_HARD_LIMITS } from 'modules/api/user-credentials/constants/passwordHardLimits.constant';

export function userPassword(): PropertyDecorator {
  return applyDecorators(
    MaxLength(PASSWORD_HARD_LIMITS.MAX_LENGTH, {
      message: USER_ERROR_MESSAGES.USER_PASSWORD_TOO_LONG,
    }),

    MinLength(PASSWORD_HARD_LIMITS.MIN_LENGTH, {
      message: USER_ERROR_MESSAGES.USER_PASSWORD_TOO_SHORT,
    }),

    ApiProperty({
      description: USER_DESCRIPTION_MESSAGES.USER_PASSWORD,
      example: USER_DESCRIPTION_MESSAGES.EXAMPLE_USER_PASSWORD,
    }),
  );
}
