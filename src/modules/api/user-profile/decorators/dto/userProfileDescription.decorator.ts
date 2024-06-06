import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';
import { USER_PROFILE_DESCRIPTION_MESSAGES } from 'messages/description/api/user-profile/userProfileDescriptionMessages.constant';
import { USER_PROFILE_ERROR_MESSAGES } from 'messages/error/api/user-profile/userProfileErrorMessages.constant';

export function userProfileDescription(
  ...decorators: PropertyDecorator[]
): PropertyDecorator {
  return applyDecorators(
    ...decorators,

    MaxLength(1000, {
      message: USER_PROFILE_ERROR_MESSAGES.USER_PROFILE_DESCRIPTION_TOO_LONG,
    }),

    ApiProperty({
      description: USER_PROFILE_DESCRIPTION_MESSAGES.DESCRIPTION,
      example: USER_PROFILE_DESCRIPTION_MESSAGES.EXAMPLE_DESCRIPTION,
    }),
  );
}
