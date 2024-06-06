import { Module } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import authenticationConfig from 'config/authentication.config';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [authenticationConfig.KEY],
      useFactory: async (config: ConfigType<typeof authenticationConfig>) => ({
        secret: config.access_token.secret,
        signOptions: {
          expiresIn: config.access_token.expires_in_seconds,
        },
      }),
    }),
  ],
  exports: [JwtModule],
})
export class AccessTokenModule {}
