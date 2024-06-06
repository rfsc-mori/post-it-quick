import type { TCreateUser } from './createUser.type';

export type TUpdateUser = Partial<Pick<TCreateUser, 'name'>>;
