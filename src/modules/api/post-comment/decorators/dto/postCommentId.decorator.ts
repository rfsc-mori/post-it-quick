import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { POST_COMMENT_DESCRIPTION_MESSAGES } from 'messages/description/api/post-comment/postCommentDescriptionMessages.constant';
import { POST_COMMENT_ERROR_MESSAGES } from 'messages/error/api/post-comment/postCommentErrorMessages.constant';

export function postCommentId(): PropertyDecorator {
  return applyDecorators(
    IsNotEmpty({
      message: POST_COMMENT_ERROR_MESSAGES.POST_COMMENT_ID_INVALID,
    }),

    IsUUID('all', {
      message: POST_COMMENT_ERROR_MESSAGES.POST_COMMENT_ID_INVALID,
    }),

    ApiProperty({
      description: POST_COMMENT_DESCRIPTION_MESSAGES.POST_COMMENT_ID,
      example: POST_COMMENT_DESCRIPTION_MESSAGES.EXAMPLE_POST_COMMENT_ID,
    }),
  );
}
