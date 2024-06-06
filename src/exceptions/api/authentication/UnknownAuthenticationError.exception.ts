import { InternalServerErrorException } from '@nestjs/common';
import { AUTHENTICATION_ERROR_MESSAGES } from 'messages/error/api/authentication/authenticationErrorMessages.constant';

export class UnknownAuthenticationError extends InternalServerErrorException {
  constructor() {
    super(AUTHENTICATION_ERROR_MESSAGES.UNKNOWN_AUTHENTICATION_ERROR);
  }
}
