import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { USER_DESCRIPTION_MESSAGES } from 'messages/description/api/user/userDescriptionMessages.constant';
import { UserWithProfileDto } from 'modules/api/user/dto/UserWithProfile.dto';

export function findCurrentUser(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      summary: USER_DESCRIPTION_MESSAGES.FIND_CURRENT_USER_API,
    }),

    ApiOkResponse({
      description: USER_DESCRIPTION_MESSAGES.FIND_CURRENT_USER_FOUND,
      type: UserWithProfileDto,
    }),
  );
}
