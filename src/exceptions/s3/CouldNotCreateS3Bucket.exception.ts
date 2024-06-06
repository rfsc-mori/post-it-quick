import { InternalServerErrorException } from '@nestjs/common';
import { S3_ERROR_MESSAGES } from 'messages/error/s3/s3ErrorMessages.constant';

export class CouldNotCreateS3Bucket extends InternalServerErrorException {
  constructor() {
    super(S3_ERROR_MESSAGES.COULD_NOT_CREATE_BUCKET);
  }
}
