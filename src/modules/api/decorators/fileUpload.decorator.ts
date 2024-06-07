import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

export function fileUpload(file: string): MethodDecorator {
  return applyDecorators(
    ApiConsumes('multipart/form-data'),

    ApiBody({
      schema: {
        type: 'object',
        properties: {
          [file]: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    }),

    UseInterceptors(FileInterceptor(file)),
  );
}
