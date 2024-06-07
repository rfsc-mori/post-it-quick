import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { POST_DESCRIPTION_MESSAGES } from 'messages/description/api/post/postDescriptionMessages.constant';

export function postViews(): PropertyDecorator {
  return applyDecorators(
    ApiProperty({
      description: POST_DESCRIPTION_MESSAGES.POST_VIEWS,
      example: POST_DESCRIPTION_MESSAGES.EXAMPLE_POST_VIEWS,
    }),
  );
}
