import { Module } from '@nestjs/common';
import { AccessTokenAuthenticationModule } from 'modules/api/authentication/guards/access-token-authentication/AccessTokenAuthentication.module';

import { HelloPlanetController } from './HelloPlanet.controller';
import { HelloPlanetService } from './HelloPlanet.service';

@Module({
  imports: [AccessTokenAuthenticationModule],
  controllers: [HelloPlanetController],
  providers: [HelloPlanetService],
})
export class HelloPlanetModule {}
