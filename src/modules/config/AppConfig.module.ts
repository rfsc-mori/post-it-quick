import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from 'config/app.config';
import authenticationConfig from 'config/authentication.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, authenticationConfig],
    }),
  ],
})
export class AppConfigModule {}
