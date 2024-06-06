import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export function rootController(): ClassDecorator {
  return applyDecorators(ApiTags('API de exemplo.'), Controller());
}
