import { applyDecorators } from '@nestjs/common';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { USER_DESCRIPTION_MESSAGES } from 'messages/description/api/user/userDescriptionMessages.constant';
import { USER_ERROR_MESSAGES } from 'messages/error/api/user/userErrorMessages.constant';
import { apiWithBodyValidator } from 'modules/api/decorators/apiWithBodyValidator.decorator';
import { UserDto } from 'modules/api/user/dto/User.dto';

export function createUser(): MethodDecorator {
  return applyDecorators(
    apiWithBodyValidator(),

    ApiOperation({
      summary: USER_DESCRIPTION_MESSAGES.CREATE_USER_API,
    }),

    ApiCreatedResponse({
      description: USER_DESCRIPTION_MESSAGES.CREATE_USER_CREATED,
      type: UserDto,
    }),

    ApiConflictResponse({
      description: USER_ERROR_MESSAGES.USER_ALREADY_EXISTS,
    }),
  );
}
