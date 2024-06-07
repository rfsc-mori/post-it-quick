import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { POST_DESCRIPTION_MESSAGES } from 'messages/description/api/post/postDescriptionMessages.constant';
import { POST_ERROR_MESSAGES } from 'messages/error/api/post/postErrorMessages.constant';

export function postId(): PropertyDecorator {
  return applyDecorators(
    IsNotEmpty({ message: POST_ERROR_MESSAGES.POST_ID_INVALID }),
    IsUUID('all', { message: POST_ERROR_MESSAGES.POST_ID_INVALID }),

    ApiProperty({
      description: POST_DESCRIPTION_MESSAGES.POST_ID,
      example: POST_DESCRIPTION_MESSAGES.EXAMPLE_POST_ID,
    }),
  );
}
