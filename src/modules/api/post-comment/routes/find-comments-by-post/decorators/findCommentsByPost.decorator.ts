import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { POST_COMMENT_DESCRIPTION_MESSAGES } from 'messages/description/api/post-comment/postCommentDescriptionMessages.constant';
import { PostCommentForListingDto } from 'modules/api/post-comment/dto/PostCommentForListing.dto';

export function findCommentsByPost(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      summary: POST_COMMENT_DESCRIPTION_MESSAGES.FIND_COMMENT_BY_POST_API,
    }),

    ApiOkResponse({
      description:
        POST_COMMENT_DESCRIPTION_MESSAGES.FIND_COMMENT_BY_POST_CREATED,
      type: PostCommentForListingDto,
      isArray: true,
    }),
  );
}
