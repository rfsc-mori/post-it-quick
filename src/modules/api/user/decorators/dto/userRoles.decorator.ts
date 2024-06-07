import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { USER_DESCRIPTION_MESSAGES } from 'messages/description/api/user/userDescriptionMessages.constant';
import { AUTHORIZATION_ROLE } from 'modules/api/authorization/constants/authorizationRole.constant';

export function userRoles(): PropertyDecorator {
  return applyDecorators(
    ApiProperty({
      enum: AUTHORIZATION_ROLE,
      description: USER_DESCRIPTION_MESSAGES.USER_ROLES,
      example: USER_DESCRIPTION_MESSAGES.EXAMPLE_USER_ROLES,
    }),
  );
}
