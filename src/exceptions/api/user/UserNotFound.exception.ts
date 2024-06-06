import { NotFoundException } from '@nestjs/common';
import { USER_ERROR_MESSAGES } from 'messages/error/api/user/userErrorMessages.constant';

export class UserNotFoundException extends NotFoundException {
  constructor() {
    super(USER_ERROR_MESSAGES.USER_NOT_FOUND);
  }
}
