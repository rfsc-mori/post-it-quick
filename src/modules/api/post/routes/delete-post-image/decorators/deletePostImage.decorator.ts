import { applyDecorators } from '@nestjs/common';
import { ApiNoContentResponse, ApiOperation } from '@nestjs/swagger';
import { POST_DESCRIPTION_MESSAGES } from 'messages/description/api/post/postDescriptionMessages.constant';

export function deletePostImage(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      summary: POST_DESCRIPTION_MESSAGES.DELETE_POST_IMAGE_API,
    }),

    ApiNoContentResponse({
      description: POST_DESCRIPTION_MESSAGES.DELETE_POST_IMAGE_UPDATED,
    }),
  );
}
