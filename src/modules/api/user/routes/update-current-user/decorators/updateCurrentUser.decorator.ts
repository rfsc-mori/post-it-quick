import { applyDecorators } from '@nestjs/common';
import { ApiNoContentResponse, ApiOperation } from '@nestjs/swagger';
import { USER_DESCRIPTION_MESSAGES } from 'messages/description/api/user/userDescriptionMessages.constant';
import { apiWithBodyValidator } from 'modules/api/decorators/apiWithBodyValidator.decorator';

export function updateCurrentUser(): MethodDecorator {
  return applyDecorators(
    apiWithBodyValidator(),

    ApiOperation({
      summary: USER_DESCRIPTION_MESSAGES.UPDATE_CURRENT_USER_API,
    }),

    ApiNoContentResponse({
      description: USER_DESCRIPTION_MESSAGES.UPDATE_CURRENT_USER_UPDATED,
    }),
  );
}
