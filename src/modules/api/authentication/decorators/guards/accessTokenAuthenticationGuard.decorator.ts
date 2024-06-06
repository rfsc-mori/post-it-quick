import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AUTHENTICATION_ERROR_MESSAGES } from 'messages/error/api/authentication/authenticationErrorMessages.constant';

import { AccessTokenAuthenticationGuard } from '../../guards/access-token-authentication/AccessTokenAuthentication.guard';

export function accessTokenAuthenticationGuard(): MethodDecorator {
  return applyDecorators(
    UseGuards(AccessTokenAuthenticationGuard),

    ApiBearerAuth(),

    ApiUnauthorizedResponse({
      description:
        AUTHENTICATION_ERROR_MESSAGES.ACCESS_TOKEN_EXPIRED_OR_INVALID,
    }),
  );
}
