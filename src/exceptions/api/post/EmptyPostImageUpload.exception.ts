import { BadRequestException } from '@nestjs/common';
import { POST_ERROR_MESSAGES } from 'messages/error/api/post/postErrorMessages.constant';

export class EmptyPostImageUploadException extends BadRequestException {
  constructor() {
    super(POST_ERROR_MESSAGES.EMPTY_POST_IMAGE_UPLOAD);
  }
}
