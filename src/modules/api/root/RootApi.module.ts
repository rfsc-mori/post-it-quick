import { Module } from '@nestjs/common';

import { HelloPlanetModule } from './routes/hello-planet/HelloPlanet.module';

@Module({
  imports: [HelloPlanetModule],
})
export class RootApiModule {}
