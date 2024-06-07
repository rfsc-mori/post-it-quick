import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';
import { POST_DESCRIPTION_MESSAGES } from 'messages/description/api/post/postDescriptionMessages.constant';
import { POST_ERROR_MESSAGES } from 'messages/error/api/post/postErrorMessages.constant';

export function postDescription(): PropertyDecorator {
  return applyDecorators(
    MaxLength(1000, {
      message: POST_ERROR_MESSAGES.POST_DESCRIPTION_TOO_LONG,
    }),

    ApiProperty({
      description: POST_DESCRIPTION_MESSAGES.POST_DESCRIPTION,
      example: POST_DESCRIPTION_MESSAGES.EXAMPLE_POST_DESCRIPTION,
    }),
  );
}
