import { applyDecorators } from '@nestjs/common';
import { ApiNoContentResponse, ApiOperation } from '@nestjs/swagger';
import { USER_PROFILE_DESCRIPTION_MESSAGES } from 'messages/description/api/user-profile/userProfileDescriptionMessages.constant';
import { apiWithBodyValidator } from 'modules/api/decorators/apiWithBodyValidator.decorator';

export function updateCurrentUserProfile(): MethodDecorator {
  return applyDecorators(
    apiWithBodyValidator(),

    ApiOperation({
      summary:
        USER_PROFILE_DESCRIPTION_MESSAGES.UPDATE_CURRENT_USER_PROFILE_API,
    }),

    ApiNoContentResponse({
      description:
        USER_PROFILE_DESCRIPTION_MESSAGES.UPDATE_CURRENT_USER_PROFILE_UPDATED,
    }),
  );
}
