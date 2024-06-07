import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export function postController(): ClassDecorator {
  return applyDecorators(ApiTags('API de Postagens'), Controller('post'));
}
