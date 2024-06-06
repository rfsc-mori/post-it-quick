import { InternalServerErrorException } from '@nestjs/common';
import { S3_ERROR_MESSAGES } from 'messages/error/s3/s3ErrorMessages.constant';

export class S3DeleteError extends InternalServerErrorException {
  constructor() {
    super(S3_ERROR_MESSAGES.S3_DELETE_ERROR);
  }
}
