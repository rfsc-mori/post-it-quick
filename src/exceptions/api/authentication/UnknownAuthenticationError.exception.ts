import { UnauthorizedException } from '@nestjs/common';

export class UnknownAuthenticationError extends UnauthorizedException {
  constructor(error: Error) {
    super(error);
  }
}
