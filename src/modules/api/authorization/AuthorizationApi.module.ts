import { Module } from '@nestjs/common';
import { AccessControlModule } from 'nest-access-control';

import { AUTHORIZATION_GRANT } from './constants/authorizationGrant.constant';

@Module({
  imports: [AccessControlModule.forRoles(AUTHORIZATION_GRANT)],
})
export class AuthorizationApiModule {}
