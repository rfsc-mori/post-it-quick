import { applyDecorators } from '@nestjs/common';
import { ApiNoContentResponse, ApiOperation } from '@nestjs/swagger';
import { USER_PROFILE_DESCRIPTION_MESSAGES } from 'messages/description/api/user-profile/userProfileDescriptionMessages.constant';

export function deleteAvatar(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      summary: USER_PROFILE_DESCRIPTION_MESSAGES.DELETE_CURRENT_USER_AVATAR_API,
    }),

    ApiNoContentResponse({
      description:
        USER_PROFILE_DESCRIPTION_MESSAGES.DELETE_CURRENT_USER_AVATAR_UPDATED,
    }),
  );
}
