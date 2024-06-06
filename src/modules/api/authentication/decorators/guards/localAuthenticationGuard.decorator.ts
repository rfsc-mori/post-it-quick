import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AUTHENTICATION_ERROR_MESSAGES } from 'messages/error/api/authentication/authenticationErrorMessages.constant';

import { LocalLoginGuard } from '../../guards/local-login-guard/LocalLogin.guard';

export function localAuthenticationGuard(): MethodDecorator {
  return applyDecorators(
    UseGuards(LocalLoginGuard),

    ApiUnauthorizedResponse({
      description: AUTHENTICATION_ERROR_MESSAGES.INCORRECT_CREDENTIALS,
    }),
  );
}
