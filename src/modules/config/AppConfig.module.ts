import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from 'config/app.config';
import authenticationConfig from 'config/authentication.config';
import emailConfig from 'config/email.config';
import s3Config from 'config/s3.config';
import uploadConfig from 'config/upload.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
        authenticationConfig,
        s3Config,
        uploadConfig,
        emailConfig,
      ],
    }),
  ],
})
export class AppConfigModule {}
