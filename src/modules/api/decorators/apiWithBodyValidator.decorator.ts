import { applyDecorators } from '@nestjs/common';
import { ApiBadRequestResponse } from '@nestjs/swagger';
import { API_ERROR_MESSAGES } from 'messages/error/api/apiErrorMessages.constant';

export function apiWithBodyValidator(): MethodDecorator {
  return applyDecorators(
    ApiBadRequestResponse({
      description: API_ERROR_MESSAGES.VALIDATION_ERROR,
    }),
  );
}
