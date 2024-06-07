import { applyDecorators } from '@nestjs/common';
import { ApiNoContentResponse, ApiOperation } from '@nestjs/swagger';
import { POST_DESCRIPTION_MESSAGES } from 'messages/description/api/post/postDescriptionMessages.constant';

export function updatePost(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      summary: POST_DESCRIPTION_MESSAGES.UPDATE_POST_API,
    }),

    ApiNoContentResponse({
      description: POST_DESCRIPTION_MESSAGES.UPDATE_POST_UPDATED,
    }),
  );
}
