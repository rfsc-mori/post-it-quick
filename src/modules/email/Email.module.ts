import { Module } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import emailConfig from 'config/email.config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      inject: [emailConfig.KEY],
      useFactory: async (config: ConfigType<typeof emailConfig>) => ({
        transport: {
          host: config.server.host,
          port: config.server.port,
          auth: {
            user: config.server.credentials.user,
            pass: config.server.credentials.pass,
          },
        },
        defaults: {
          from: config.server.defaults.from,
        },
      }),
    }),
  ],
  exports: [MailerModule],
})
export class EmailModule {}
