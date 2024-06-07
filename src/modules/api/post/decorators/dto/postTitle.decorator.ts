import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';
import { POST_DESCRIPTION_MESSAGES } from 'messages/description/api/post/postDescriptionMessages.constant';
import { POST_ERROR_MESSAGES } from 'messages/error/api/post/postErrorMessages.constant';

export function postTitle(): PropertyDecorator {
  return applyDecorators(
    MaxLength(100, { message: POST_ERROR_MESSAGES.POST_TITLE_TOO_LONG }),
    MinLength(1, { message: POST_ERROR_MESSAGES.POST_TITLE_TOO_SHORT }),

    ApiProperty({
      description: POST_DESCRIPTION_MESSAGES.POST_TITLE,
      example: POST_DESCRIPTION_MESSAGES.EXAMPLE_POST_TITLE,
    }),
  );
}
