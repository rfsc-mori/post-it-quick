import { applyDecorators } from '@nestjs/common';
import { ValidateIf, type ValidationOptions } from 'class-validator';

import { notNull } from './notNull.decorator';

export function optionalNotNull(
  options?: ValidationOptions,
): PropertyDecorator {
  return applyDecorators(
    (target: object, key: string | symbol) => {
      return ValidateIf((obj): boolean => obj[key] !== undefined, options)(
        target,
        key,
      );
    },

    notNull(),
  );
}
