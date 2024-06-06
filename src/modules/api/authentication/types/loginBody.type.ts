import type { TCreateUserPlainPassword } from 'modules/api/user/types/createUserPlainPassword.type';

export type TLoginBody = Pick<TCreateUserPlainPassword, 'email' | 'password'>;
