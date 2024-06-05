import { Module } from '@nestjs/common';

import { HelloPlanetController } from './HelloPlanet.controller';
import { HelloPlanetService } from './HelloPlanet.service';

@Module({
  controllers: [HelloPlanetController],
  providers: [HelloPlanetService],
})
export class HelloPlanetModule {}
