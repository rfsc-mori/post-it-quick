import { applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { POST_REACTION_DESCRIPTION_MESSAGES } from 'messages/description/api/post-reaction/postReactionDescriptionMessages.constant';
import { PostReactionStatsDto } from 'modules/api/post-reactions/dto/PostReactionStats.dto';

export function addPostReaction(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      summary: POST_REACTION_DESCRIPTION_MESSAGES.ADD_POST_REACTION_API,
    }),

    ApiCreatedResponse({
      description: POST_REACTION_DESCRIPTION_MESSAGES.ADD_POST_REACTION_CREATED,
      type: PostReactionStatsDto,
    }),
  );
}
