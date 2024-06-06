import { Get } from '@nestjs/common';
import { accessTokenAuthenticationGuard } from 'modules/api/authentication/decorators/guards/accessTokenAuthenticationGuard.decorator';

import { rootController } from '../../decorators/rootController.decorator';
import { helloPlanet } from './decorators/helloPlanet.decorator';
import { HelloPlanetService } from './HelloPlanet.service';

@rootController()
export class HelloPlanetController {
  constructor(private readonly hello_planet: HelloPlanetService) {}

  @Get()
  @helloPlanet()
  @accessTokenAuthenticationGuard()
  async get(): Promise<string> {
    return await this.hello_planet.run();
  }
}
