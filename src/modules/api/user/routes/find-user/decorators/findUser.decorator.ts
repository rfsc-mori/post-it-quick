import { applyDecorators } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { USER_DESCRIPTION_MESSAGES } from 'messages/description/api/user/userDescriptionMessages.constant';
import { USER_ERROR_MESSAGES } from 'messages/error/api/user/userErrorMessages.constant';
import { UserWithProfileDto } from 'modules/api/user/dto/UserWithProfile.dto';

export function findUser(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      summary: USER_DESCRIPTION_MESSAGES.FIND_USER_API,
    }),

    ApiOkResponse({
      description: USER_DESCRIPTION_MESSAGES.FIND_USER_FOUND,
      type: UserWithProfileDto,
    }),

    ApiNotFoundResponse({
      description: USER_ERROR_MESSAGES.USER_NOT_FOUND,
    }),
  );
}
