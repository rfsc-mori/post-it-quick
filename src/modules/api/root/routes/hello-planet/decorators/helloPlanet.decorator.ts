import { applyDecorators } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { ROOT_DESCRIPTION_MESSAGES } from 'messages/description/api/root/rootDescriptionMessages.constant';

export function helloPlanet(): MethodDecorator {
  return applyDecorators(
    ApiOperation({
      summary: ROOT_DESCRIPTION_MESSAGES.HELLO_PLANET_API,
    }),

    ApiOkResponse({
      description: ROOT_DESCRIPTION_MESSAGES.HELLO_PLANET_OK,
    }),
  );
}
