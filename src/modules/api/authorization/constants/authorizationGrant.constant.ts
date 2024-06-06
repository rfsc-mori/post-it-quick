import { RolesBuilder } from 'nest-access-control';

import { AUTHORIZATION_RESOURCE } from './authorizationResource.constant';
import { AUTHORIZATION_ROLE } from './authorizationRole.constant';

export const AUTHORIZATION_GRANT = new RolesBuilder();

AUTHORIZATION_GRANT.grant(AUTHORIZATION_ROLE.USER)
  .updateOwn(AUTHORIZATION_RESOURCE.USER)
  .deleteOwn(AUTHORIZATION_RESOURCE.USER)
  .readAny(AUTHORIZATION_RESOURCE.USER);

AUTHORIZATION_GRANT.grant(AUTHORIZATION_ROLE.USER)
  .updateOwn(AUTHORIZATION_RESOURCE.PROFILE)
  .readAny(AUTHORIZATION_RESOURCE.PROFILE);

export class AuthorizationGrant extends RolesBuilder {}
