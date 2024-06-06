import { applyDecorators } from '@nestjs/common';
import {
  buildMessage,
  ValidateBy,
  type ValidationOptions,
} from 'class-validator';

export function notNull(options?: ValidationOptions): PropertyDecorator {
  return applyDecorators(
    ValidateBy({
      name: 'notNull',
      validator: {
        validate: (value) => value !== null,
        defaultMessage: buildMessage(
          (each_prefix) => each_prefix + 'Campo `$property` não deve ser null.',
          options,
        ),
      },
    }),
  );
}
