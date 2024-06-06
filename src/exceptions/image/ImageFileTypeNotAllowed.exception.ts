import { BadRequestException } from '@nestjs/common';
import { IMAGE_ERROR_MESSAGES } from 'messages/error/image/imageErrorMessages.constant';

export class ImageFileTypeNotAllowed extends BadRequestException {
  constructor() {
    super(IMAGE_ERROR_MESSAGES.MIME_TYPE_NOT_ALLOWED);
  }
}
