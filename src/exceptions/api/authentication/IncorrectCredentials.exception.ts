import { UnauthorizedException } from '@nestjs/common';
import { AUTHENTICATION_ERROR_MESSAGES } from 'messages/error/api/authentication/authenticationErrorMessages.constant';

export class IncorrectCredentialsException extends UnauthorizedException {
  constructor() {
    super(AUTHENTICATION_ERROR_MESSAGES.INCORRECT_CREDENTIALS);
  }
}
