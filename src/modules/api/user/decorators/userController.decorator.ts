import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export function userController(): ClassDecorator {
  return applyDecorators(ApiTags('API de Usuários'), Controller('user'));
}
