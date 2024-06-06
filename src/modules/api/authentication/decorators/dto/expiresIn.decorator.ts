import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AUTHENTICATION_DESCRIPTION_MESSAGES } from 'messages/description/api/authentication/authenticationDescriptionMessages.constant';

export function expiresIn(): PropertyDecorator {
  return applyDecorators(
    ApiProperty({
      description: AUTHENTICATION_DESCRIPTION_MESSAGES.EXPIRES_IN,
      example: AUTHENTICATION_DESCRIPTION_MESSAGES.EXAMPLE_EXPIRES_IN,
    }),
  );
}
