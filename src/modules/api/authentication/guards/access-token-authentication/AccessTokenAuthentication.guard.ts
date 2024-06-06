import type { ExecutionContext } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { JsonWebTokenError, TokenExpiredError } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { AccessTokenExpiredException } from 'exceptions/api/authentication/AccessTokenExpired.exception';
import { AccessTokenInvalidException } from 'exceptions/api/authentication/AccessTokenInvalid.exception';

import type { TRequestUser } from '../../types/requestUser.type';

@Injectable()
export class AccessTokenAuthenticationGuard extends AuthGuard('jwt') {
  handleRequest(
    err: unknown,
    user: TRequestUser | unknown,
    info: JsonWebTokenError | unknown,
    context: ExecutionContext,
    status: unknown,
    // Padrão da classe base.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): any {
    if (err || !user) {
      if (info instanceof JsonWebTokenError) {
        if (info instanceof TokenExpiredError) {
          throw new AccessTokenExpiredException();
        } else {
          throw new AccessTokenInvalidException();
        }
      } else {
        throw err || new AccessTokenInvalidException();
      }
    }

    return super.handleRequest(err, user, info, context, status);
  }
}
