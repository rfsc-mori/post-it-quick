import { applyDecorators } from '@nestjs/common';
import {
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { USER_DESCRIPTION_MESSAGES } from 'messages/description/api/user/userDescriptionMessages.constant';
import { USER_ERROR_MESSAGES } from 'messages/error/api/user/userErrorMessages.constant';
import { apiWithBodyValidator } from 'modules/api/decorators/apiWithBodyValidator.decorator';

export function deleteCurrentUser(): MethodDecorator {
  return applyDecorators(
    apiWithBodyValidator(),

    ApiOperation({
      summary: USER_DESCRIPTION_MESSAGES.DELETE_CURRENT_USER_API,
    }),

    ApiNoContentResponse({
      description: USER_DESCRIPTION_MESSAGES.DELETE_CURRENT_USER_DELETED,
    }),

    ApiNotFoundResponse({
      description: USER_ERROR_MESSAGES.USER_NOT_FOUND,
    }),
  );
}
