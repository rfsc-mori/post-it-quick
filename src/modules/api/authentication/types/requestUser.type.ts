import type { TUser } from 'modules/api/user/types/user.type';

export type TRequestUser = Pick<TUser, 'id' | 'roles'>;
