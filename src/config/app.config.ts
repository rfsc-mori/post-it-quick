import { registerAs } from '@nestjs/config';
import Joi from 'joi';
import { validateConfigWithSchema } from 'utils/config/validateConfigWithSchema';

export default registerAs('app', () => {
  const app_config = {
    name: 'Post-It-Quick!',
    version: '0.0.1',

    server: {
      port: Number(process.env.SERVER_PORT || 3000),
      address: process.env.SERVER_ADDRESS || '0.0.0.0',
    },
  } as const;

  const app_config_schema = Joi.object({
    name: Joi.string().required(),
    version: Joi.string().required(),

    server: Joi.object({
      port: Joi.number().required().port(),
      address: Joi.string().required().hostname(),
    }),
  });

  validateConfigWithSchema(app_config, app_config_schema);

  return app_config;
});
