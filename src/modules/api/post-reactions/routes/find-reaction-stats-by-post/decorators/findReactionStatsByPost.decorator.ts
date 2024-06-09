import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { POST_REACTION_DESCRIPTION_MESSAGES } from 'messages/description/api/post-reaction/postReactionDescriptionMessages.constant';
import { PostReactionStatsDto } from 'modules/api/post-reactions/dto/PostReactionStats.dto';

export function findReactionStatsByPost(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      summary:
        POST_REACTION_DESCRIPTION_MESSAGES.FIND_REACTION_STATS_BY_POST_API,
    }),

    ApiOkResponse({
      description:
        POST_REACTION_DESCRIPTION_MESSAGES.FIND_REACTION_STATS_BY_POST_CREATED,
      type: PostReactionStatsDto,
    }),
  );
}
