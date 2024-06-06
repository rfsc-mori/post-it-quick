import type { TRequestUser } from './requestUser.type';

export type TAccessTokenPayload = Omit<TRequestUser, 'id'> & {
  readonly sub: TRequestUser['id'];
};
