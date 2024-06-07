import { Module } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import uploadConfig from 'config/upload.config';
import { ImageFileSizeTooHigh } from 'exceptions/image/ImageFileSizeTooHigh.exception';
import { ImageFileTypeNotAllowed } from 'exceptions/image/ImageFileTypeNotAllowed.exception';
import { memoryStorage } from 'multer';

import { POST_IMAGE_FORMATS } from './constants/postImageFormats.constant';

@Module({
  imports: [
    MulterModule.registerAsync({
      inject: [uploadConfig.KEY],
      useFactory: async (config: ConfigType<typeof uploadConfig>) => {
        return {
          storage: memoryStorage(),
          limits: {
            files: config.post_image.max_file_count,
            fileSize: config.post_image.max_file_size,
          },
          fileFilter: (request, file, callback): void => {
            if (
              Number(request.headers['content-length']) >
              config.post_image.max_file_size
            ) {
              return callback(new ImageFileSizeTooHigh(), false);
            }

            if (!POST_IMAGE_FORMATS.includes(file.mimetype)) {
              return callback(new ImageFileTypeNotAllowed(), false);
            }

            return callback(null, true);
          },
        };
      },
    }),
  ],
  exports: [MulterModule],
})
export class MulterForPostImageModule {}
