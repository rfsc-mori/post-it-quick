import type { TAuthorizationRole } from 'modules/api/authorization/constants/authorizationRole.constant';

export type TUser = {
  readonly id: string;

  readonly name: string;
  readonly email: string;

  readonly roles: TAuthorizationRole[];

  readonly created_at: Date;
  readonly updated_at: Date;
};
