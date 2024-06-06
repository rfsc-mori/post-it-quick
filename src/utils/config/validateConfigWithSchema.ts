import { InvalidConfigSchemaException } from 'exceptions/config/InvalidConfigSchema.exception';
import type Joi from 'joi';

export function validateConfigWithSchema(
  config: object,
  schema: Joi.ObjectSchema,
): void {
  const { error } = schema.validate(config, {
    allowUnknown: false,
    abortEarly: false,
  });

  if (error) {
    throw new InvalidConfigSchemaException(error.message);
  }
}
