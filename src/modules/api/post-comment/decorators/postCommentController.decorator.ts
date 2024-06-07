import { applyDecorators, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export function postCommentController(): ClassDecorator {
  return applyDecorators(ApiTags('API de Comentários'), Controller('comments'));
}
