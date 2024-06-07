import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export function postReactionController(): ClassDecorator {
  return applyDecorators(
    ApiTags('API de Reações em Postagens'),
    Controller('post-reaction'),
  );
}
