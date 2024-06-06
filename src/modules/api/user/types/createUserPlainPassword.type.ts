import type { TCreateUser } from './createUser.type';

export type TCreateUserPlainPassword = Omit<TCreateUser, 'password_hash'> & {
  readonly password: string;
};
