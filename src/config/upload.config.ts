import { registerAs } from '@nestjs/config';
import Joi from 'joi';
import { validateConfigWithSchema } from 'utils/config/validateConfigWithSchema';

export default registerAs('upload', () => {
  const upload_config = {
    avatar: {
      max_file_count: 1,
      max_file_size: 1 * 1024 * 1024, // 1 MB
    },

    post_image: {
      max_file_count: 1,
      max_file_size: 1 * 1024 * 1024, // 1 MB
    },
  } as const;

  const upload_config_schema = Joi.object({
    avatar: Joi.object({
      max_file_count: Joi.number().integer().min(1).required(),
      max_file_size: Joi.number().integer().min(1).required(),
    }).required(),

    post_image: Joi.object({
      max_file_count: Joi.number().integer().min(1).required(),
      max_file_size: Joi.number().integer().min(1).required(),
    }).required(),
  });

  validateConfigWithSchema(upload_config, upload_config_schema);

  return upload_config;
});
