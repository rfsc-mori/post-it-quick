import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export function userProfileController(): ClassDecorator {
  return applyDecorators(
    ApiTags('API de Perfis de Usuário'),
    Controller('profile'),
  );
}
