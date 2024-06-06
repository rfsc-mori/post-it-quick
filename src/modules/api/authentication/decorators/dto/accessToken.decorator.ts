import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { AUTHENTICATION_DESCRIPTION_MESSAGES } from 'messages/description/api/authentication/authenticationDescriptionMessages.constant';

export function accessToken(): PropertyDecorator {
  return applyDecorators(
    ApiProperty({
      description: AUTHENTICATION_DESCRIPTION_MESSAGES.ACCESS_TOKEN,
      example: AUTHENTICATION_DESCRIPTION_MESSAGES.EXAMPLE_ACCESS_TOKEN,
    }),
  );
}
