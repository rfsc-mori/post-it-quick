import { applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { POST_COMMENT_DESCRIPTION_MESSAGES } from 'messages/description/api/post-comment/postCommentDescriptionMessages.constant';
import { PostCommentDto } from 'modules/api/post-comment/dto/PostComment.dto';

export function addPostComment(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      summary: POST_COMMENT_DESCRIPTION_MESSAGES.ADD_POST_COMMENT_API,
    }),

    ApiCreatedResponse({
      description: POST_COMMENT_DESCRIPTION_MESSAGES.ADD_POST_COMMENT_CREATED,
      type: PostCommentDto,
    }),
  );
}
