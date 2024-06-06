import { ConflictException } from '@nestjs/common';
import { USER_ERROR_MESSAGES } from 'messages/error/api/user/userErrorMessages.constant';

export class UserAlreadyExistsException extends ConflictException {
  constructor() {
    super(USER_ERROR_MESSAGES.USER_ALREADY_EXISTS);
  }
}
