import type { Request } from 'express';

import type { TRequestUser } from './requestUser.type';

export type TAuthenticatedRequest = Request & {
  user: TRequestUser;
};
