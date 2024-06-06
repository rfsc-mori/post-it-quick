import { Injectable } from '@nestjs/common';

import { ROOT_API } from '../../constants/rootApi.constant';

@Injectable()
export class HelloPlanetService {
  async run(): Promise<string> {
    return ROOT_API.HELLO_PLANET;
  }
}
