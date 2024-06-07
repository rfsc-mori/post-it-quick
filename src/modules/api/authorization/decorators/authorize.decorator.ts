import { applyDecorators, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AUTHENTICATION_ERROR_MESSAGES } from 'messages/error/api/authentication/authenticationErrorMessages.constant';
import { AUTHORIZATION_ERROR_MESSAGES } from 'messages/error/api/authorization/authorizationErrorMessages.constant';
import { AccessTokenAuthenticationGuard } from 'modules/api/authentication/guards/access-token-authentication/AccessTokenAuthentication.guard';
import { UserExistsGuard } from 'modules/api/authentication/guards/user-exists/UserExists.guard';
import { ACGuard, UseRoles } from 'nest-access-control';

export function authorize(
  ...roles: Parameters<typeof UseRoles>
): MethodDecorator {
  return applyDecorators(
    UseGuards(AccessTokenAuthenticationGuard, UserExistsGuard, ACGuard),

    UseRoles(...roles),

    ApiBearerAuth(),

    ApiUnauthorizedResponse({
      description:
        AUTHENTICATION_ERROR_MESSAGES.ACCESS_TOKEN_EXPIRED_OR_INVALID,
    }),

    ApiForbiddenResponse({
      description: AUTHORIZATION_ERROR_MESSAGES.FORBIDDEN_ACTION,
    }),
  );
}
