import { applyDecorators } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOperation,
  ApiPayloadTooLargeResponse,
} from '@nestjs/swagger';
import { POST_DESCRIPTION_MESSAGES } from 'messages/description/api/post/postDescriptionMessages.constant';
import { IMAGE_ERROR_MESSAGES } from 'messages/error/image/imageErrorMessages.constant';
import { apiWithBodyValidator } from 'modules/api/decorators/apiWithBodyValidator.decorator';
import { PostWithImageUrlDto } from 'modules/api/post/dto/PostWithImageUrl.dto';

export function uploadPostImage(): MethodDecorator {
  return applyDecorators(
    apiWithBodyValidator(),

    ApiOperation({
      summary: POST_DESCRIPTION_MESSAGES.UPLOAD_POST_IMAGE_API,
    }),

    ApiPayloadTooLargeResponse({
      description: IMAGE_ERROR_MESSAGES.FILE_SIZE_TOO_HIGH,
    }),

    ApiCreatedResponse({
      description: POST_DESCRIPTION_MESSAGES.UPLOAD_POST_IMAGE_UPDATED,
      type: PostWithImageUrlDto,
    }),
  );
}
