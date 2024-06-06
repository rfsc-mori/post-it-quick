import { BadRequestException } from '@nestjs/common';
import { USER_CREDENTIALS_ERROR_MESSAGES } from 'messages/error/api/user-credentials/userCredentialsErrorMessages.constant';

export class InvalidPasswordFormatException extends BadRequestException {
  constructor() {
    super(USER_CREDENTIALS_ERROR_MESSAGES.INVALID_PASSWORD_FORMAT);
  }
}
