import { BadRequestException } from '@nestjs/common';
import { USER_PROFILE_ERROR_MESSAGES } from 'messages/error/api/user-profile/userProfileErrorMessages.constant';

export class EmptyAvatarUploadException extends BadRequestException {
  constructor() {
    super(USER_PROFILE_ERROR_MESSAGES.EMPTY_AVATAR_UPLOAD);
  }
}
