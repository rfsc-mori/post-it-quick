import { ForbiddenException } from '@nestjs/common';
import { AUTHORIZATION_ERROR_MESSAGES } from 'messages/error/api/authorization/authorizationErrorMessages.constant';

export class ForbiddenAction extends ForbiddenException {
  constructor() {
    super(AUTHORIZATION_ERROR_MESSAGES.FORBIDDEN_ACTION);
  }
}
