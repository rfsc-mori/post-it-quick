import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { POST_DESCRIPTION_MESSAGES } from 'messages/description/api/post/postDescriptionMessages.constant';

export function postImageURL(): PropertyDecorator {
  return applyDecorators(
    ApiProperty({
      description: POST_DESCRIPTION_MESSAGES.POST_IMAGE_URL,
      example: POST_DESCRIPTION_MESSAGES.EXAMPLE_POST_IMAGE_URL,
    }),
  );
}
