import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AUTHENTICATION_DESCRIPTION_MESSAGES } from 'messages/description/api/authentication/authenticationDescriptionMessages.constant';

export function tokenType(): PropertyDecorator {
  return applyDecorators(
    ApiProperty({
      description: AUTHENTICATION_DESCRIPTION_MESSAGES.TOKEN_TYPE,
      example: AUTHENTICATION_DESCRIPTION_MESSAGES.EXAMPLE_TOKEN_TYPE,
    }),
  );
}
