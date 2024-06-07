import { applyDecorators } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { POST_DESCRIPTION_MESSAGES } from 'messages/description/api/post/postDescriptionMessages.constant';
import { POST_ERROR_MESSAGES } from 'messages/error/api/post/postErrorMessages.constant';
import { PostWithImageUrlDto } from 'modules/api/post/dto/PostWithImageUrl.dto';

export function findPost(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      summary: POST_DESCRIPTION_MESSAGES.FIND_POST_API,
    }),

    ApiOkResponse({
      description: POST_DESCRIPTION_MESSAGES.FIND_POST_FOUND,
      type: PostWithImageUrlDto,
    }),

    ApiNotFoundResponse({
      description: POST_ERROR_MESSAGES.POST_NOT_FOUND,
    }),
  );
}
