import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { AUTHENTICATION_DESCRIPTION_MESSAGES } from 'messages/description/api/authentication/authenticationDescriptionMessages.constant';
import { LoginBodyDto } from 'modules/api/authentication/dto/LoginBody.dto';
import { LoginReplyDto } from 'modules/api/authentication/dto/LoginReply.dto';
import { apiWithBodyValidator } from 'modules/api/decorators/apiWithBodyValidator.decorator';

export function login(): MethodDecorator {
  return applyDecorators(
    apiWithBodyValidator(),

    ApiBody({ type: LoginBodyDto, required: true }),

    ApiOperation({
      summary: AUTHENTICATION_DESCRIPTION_MESSAGES.LOGIN_API,
    }),

    ApiOkResponse({
      description: AUTHENTICATION_DESCRIPTION_MESSAGES.LOGIN_OK,
      type: LoginReplyDto,
    }),
  );
}
