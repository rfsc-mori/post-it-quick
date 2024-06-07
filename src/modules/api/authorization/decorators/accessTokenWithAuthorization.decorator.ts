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

export function accessTokenWithAuthorization(): MethodDecorator {
  return applyDecorators(
    UseGuards(AccessTokenAuthenticationGuard, UserExistsGuard),

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
