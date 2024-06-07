import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';
import { POST_COMMENT_DESCRIPTION_MESSAGES } from 'messages/description/api/post-comment/postCommentDescriptionMessages.constant';
import { POST_COMMENT_ERROR_MESSAGES } from 'messages/error/api/post-comment/postCommentErrorMessages.constant';

export function postCommentDescription(): PropertyDecorator {
  return applyDecorators(
    MaxLength(1000, {
      message: POST_COMMENT_ERROR_MESSAGES.POST_COMMENT_DESCRIPTION_TOO_LONG,
    }),

    ApiProperty({
      description: POST_COMMENT_DESCRIPTION_MESSAGES.POST_COMMENT_DESCRIPTION,
      example:
        POST_COMMENT_DESCRIPTION_MESSAGES.EXAMPLE_POST_COMMENT_DESCRIPTION,
    }),
  );
}
