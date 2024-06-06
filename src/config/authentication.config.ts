import { registerAs } from '@nestjs/config';
import Joi from 'joi';
import { PASSWORD_HARD_LIMITS } from 'modules/api/user-credentials/constants/passwordHardLimits.constant';
import { validateConfigWithSchema } from 'utils/config/validateConfigWithSchema';

export default registerAs('authentication', () => {
  const authentication_config = {
    password: {
      min_length: PASSWORD_HARD_LIMITS.MIN_LENGTH,
      max_length: PASSWORD_HARD_LIMITS.MAX_LENGTH,
      rounds: 12,
      format:
        /^(?=.*[a-z\u00E0-\u00FF])(?=.*[A-Z\u00C0-\u00DF])(?=.*\d)(?=.*[\s\W_]).{12,71}$/,
    },
  } as const;

  const authentication_config_schema = Joi.object({
    password: Joi.object({
      min_length: Joi.number().required().min(PASSWORD_HARD_LIMITS.MIN_LENGTH),
      max_length: Joi.number().required().max(PASSWORD_HARD_LIMITS.MAX_LENGTH),
      rounds: Joi.number().required().min(PASSWORD_HARD_LIMITS.MIN_ROUNDS),
      format: Joi.object()
        .regex()
        .required()
        .custom((value: RegExp, helpers) => {
          if (!(value instanceof RegExp) || value.global) {
            return helpers.message({
              custom: `"${helpers.state.path?.join('.')}": "deve ser uma regex sem a flag global (g).`,
            });
          }

          return value;
        }),
    }),
  });

  validateConfigWithSchema(authentication_config, authentication_config_schema);

  return authentication_config;
});
