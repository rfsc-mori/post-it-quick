import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { POST_REACTION_DESCRIPTION_MESSAGES } from 'messages/description/api/post-reaction/postReactionDescriptionMessages.constant';
import { POST_REACTION_ERROR_MESSAGES } from 'messages/error/api/post-reaction/postReactionErrorMessages.constant';

import { REACTION_TYPE } from '../../constants/reactionType.constant';

export function postReactionType(): PropertyDecorator {
  return applyDecorators(
    IsEnum(REACTION_TYPE, {
      message: POST_REACTION_ERROR_MESSAGES.POST_REACTION_TYPE_INVALID,
    }),

    ApiProperty({
      enum: REACTION_TYPE,
      description: POST_REACTION_DESCRIPTION_MESSAGES.POST_REACTION_TYPE,
      example: POST_REACTION_DESCRIPTION_MESSAGES.EXAMPLE_POST_REACTION_TYPE,
    }),
  );
}
