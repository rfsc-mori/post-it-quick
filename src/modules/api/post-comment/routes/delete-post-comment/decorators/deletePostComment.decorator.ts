import { applyDecorators } from '@nestjs/common';
import { ApiNoContentResponse, ApiOperation } from '@nestjs/swagger';
import { POST_COMMENT_DESCRIPTION_MESSAGES } from 'messages/description/api/post-comment/postCommentDescriptionMessages.constant';

export function deletePostComment(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      summary: POST_COMMENT_DESCRIPTION_MESSAGES.DELETE_POST_COMMENT_API,
    }),

    ApiNoContentResponse({
      description:
        POST_COMMENT_DESCRIPTION_MESSAGES.DELETE_POST_COMMENT_CREATED,
    }),
  );
}
