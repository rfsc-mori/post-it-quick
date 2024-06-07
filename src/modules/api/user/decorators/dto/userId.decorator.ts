import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { USER_DESCRIPTION_MESSAGES } from 'messages/description/api/user/userDescriptionMessages.constant';
import { USER_ERROR_MESSAGES } from 'messages/error/api/user/userErrorMessages.constant';

export function userId(...decorators: PropertyDecorator[]): PropertyDecorator {
  return applyDecorators(
    ...decorators,

    IsNotEmpty({ message: USER_ERROR_MESSAGES.USER_ID_INVALID }),
    IsUUID('all', { message: USER_ERROR_MESSAGES.USER_ID_INVALID }),

    ApiProperty({
      description: USER_DESCRIPTION_MESSAGES.USER_ID,
      example: USER_DESCRIPTION_MESSAGES.EXAMPLE_USER_ID,
    }),
  );
}
