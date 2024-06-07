import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { POST_DESCRIPTION_MESSAGES } from 'messages/description/api/post/postDescriptionMessages.constant';
import { PostForListingWithStatsDto } from 'modules/api/post/dto/PostForListingWithStats.dto';

export function findAllPosts(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      summary: POST_DESCRIPTION_MESSAGES.FIND_ALL_POSTS_API,
    }),

    ApiOkResponse({
      description: POST_DESCRIPTION_MESSAGES.FIND_ALL_POSTS_FOUND,
      type: PostForListingWithStatsDto,
    }),
  );
}
