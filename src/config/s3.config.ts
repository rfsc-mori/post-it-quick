import { BucketLocationConstraint } from '@aws-sdk/client-s3';
import { registerAs } from '@nestjs/config';
import Joi from 'joi';
import { validateConfigWithSchema } from 'utils/config/validateConfigWithSchema';

export default registerAs('s3', () => {
  const s3_config = {
    server: {
      endpoint: process.env.S3_ENDPOINT || 'http://localhost:9000',
      bucket: process.env.S3_BUCKET || 'postitquick',

      public_url:
        process.env.S3_PUBLIC_URL || 'http://localhost:9000/postitquick',

      region: (process.env.S3_REGION ||
        'us_east_2') as BucketLocationConstraint,

      use_path_style: process.env.S3_USE_PATH_STYLE === 'true',

      credentials: {
        access_key:
          process.env.S3_ACCESS_KEY || '8Bki8kMM8A6xJjvwHAb8KPAKERaXFA8m',
        secret_key:
          process.env.S3_SECRET_KEY || 'GN24bJw2qbho3Sn828NrbAUjQC9LS9df',
      },
    },
  } as const;

  const s3_config_schema = Joi.object({
    server: Joi.object({
      endpoint: Joi.string()
        .required()
        .uri({ scheme: ['http', 'https'] }),
      bucket: Joi.string().required(),

      public_url: Joi.string()
        .required()
        .uri({ scheme: ['http', 'https'] }),

      region: Joi.string()
        .required()
        .valid(...Object.keys(BucketLocationConstraint)),

      use_path_style: Joi.boolean().required(),

      credentials: Joi.object({
        access_key: Joi.string().required(),
        secret_key: Joi.string().required(),
      }).required(),
    }).required(),
  });

  validateConfigWithSchema(s3_config, s3_config_schema);

  return s3_config;
});
