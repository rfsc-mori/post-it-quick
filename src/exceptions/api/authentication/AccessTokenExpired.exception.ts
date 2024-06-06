import { UnauthorizedException } from '@nestjs/common';
import { AUTHENTICATION_ERROR_MESSAGES } from 'messages/error/api/authentication/authenticationErrorMessages.constant';

export class AccessTokenExpiredException extends UnauthorizedException {
  constructor() {
    super(AUTHENTICATION_ERROR_MESSAGES.ACCESS_TOKEN_EXPIRED);
  }
}
