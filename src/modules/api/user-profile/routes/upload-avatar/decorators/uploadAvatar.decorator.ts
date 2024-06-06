import { applyDecorators } from '@nestjs/common';
import {
  ApiNoContentResponse,
  ApiOperation,
  ApiPayloadTooLargeResponse,
} from '@nestjs/swagger';
import { USER_PROFILE_DESCRIPTION_MESSAGES } from 'messages/description/api/user-profile/userProfileDescriptionMessages.constant';
import { IMAGE_ERROR_MESSAGES } from 'messages/error/image/imageErrorMessages.constant';
import { apiWithBodyValidator } from 'modules/api/decorators/apiWithBodyValidator.decorator';

export function uploadAvatar(): MethodDecorator {
  return applyDecorators(
    apiWithBodyValidator(),

    ApiOperation({
      summary: USER_PROFILE_DESCRIPTION_MESSAGES.UPDATE_CURRENT_USER_AVATAR_API,
    }),

    ApiPayloadTooLargeResponse({
      description: IMAGE_ERROR_MESSAGES.FILE_SIZE_TOO_HIGH,
    }),

    ApiNoContentResponse({
      description:
        USER_PROFILE_DESCRIPTION_MESSAGES.UPDATE_CURRENT_USER_AVATAR_UPDATED,
    }),
  );
}
