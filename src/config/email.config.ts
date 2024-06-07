import { registerAs } from '@nestjs/config';
import Joi from 'joi';
import { validateConfigWithSchema } from 'utils/config/validateConfigWithSchema';

export default registerAs('email', () => {
  const mail_config = {
    server: {
      host: process.env.EMAIL_HOST || 'localhost',
      port: Number(process.env.EMAIL_PORT || 1025),

      credentials: {
        user: process.env.EMAIL_USER || 'postitquick',
        pass: process.env.EMAIL_PASS || 'z96mDEwd5jokDDdrffQZ3Dg2hPpk3v4U',
      },

      defaults: {
        from: process.env.EMAIL_FROM || 'postitquick@example.com',
      },
    },
  } as const;

  const mail_config_schema = Joi.object({
    server: Joi.object({
      host: Joi.string().required().hostname(),
      port: Joi.number().required().port(),

      credentials: Joi.object({
        user: Joi.string().required(),
        pass: Joi.string().required(),
      }).required(),

      defaults: Joi.object({
        from: Joi.string().required().email(),
      }).required(),
    }).required(),
  });

  validateConfigWithSchema(mail_config, mail_config_schema);

  return mail_config;
});
