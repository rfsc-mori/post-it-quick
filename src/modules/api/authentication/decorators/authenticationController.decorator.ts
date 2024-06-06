import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export function authenticationController(): ClassDecorator {
  return applyDecorators(ApiTags('API de Autenticação'), Controller('auth'));
}
