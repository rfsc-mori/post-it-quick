import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { POST_COMMENT_DESCRIPTION_MESSAGES } from 'messages/description/api/post-comment/postCommentDescriptionMessages.constant';

export function postCommentUpdatedAt(): PropertyDecorator {
  return applyDecorators(
    ApiProperty({
      description: POST_COMMENT_DESCRIPTION_MESSAGES.POST_COMMENT_UPDATED_AT,
      example:
        POST_COMMENT_DESCRIPTION_MESSAGES.EXAMPLE_POST_COMMENT_UPDATED_AT,
    }),
  );
}
