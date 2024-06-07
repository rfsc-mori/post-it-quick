import { PayloadTooLargeException } from '@nestjs/common';
import { IMAGE_ERROR_MESSAGES } from 'messages/error/image/imageErrorMessages.constant';

export class ImageFileSizeTooHigh extends PayloadTooLargeException {
  constructor() {
    super(IMAGE_ERROR_MESSAGES.FILE_SIZE_TOO_HIGH);
  }
}
