import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { POST_REACTION_DESCRIPTION_MESSAGES } from 'messages/description/api/post-reaction/postReactionDescriptionMessages.constant';

export function postReactionLike(): PropertyDecorator {
  return applyDecorators(
    ApiProperty({
      description: POST_REACTION_DESCRIPTION_MESSAGES.POST_REACTION_LIKE,
      example: POST_REACTION_DESCRIPTION_MESSAGES.EXAMPLE_POST_REACTIONS.LIKE,
    }),
  );
}
