import type { TUserCredentials } from 'modules/api/user-credentials/types/userCredentials.type';

import type { TUser } from './user.type';

export type TCreateUser = Pick<TUser, 'name' | 'email'> & {
  readonly password_hash: TUserCredentials['password_hash'];
};
