import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import type { TAccessTokenPayload } from 'modules/api/authentication/types/accessTokenPayload.type';
import type { TRequestUser } from 'modules/api/authentication/types/requestUser.type';

@Injectable()
export class CreateAccessTokenService {
  constructor(private readonly jwt_service: JwtService) {}

  public async run({ id, ...data }: TRequestUser): Promise<string> {
    const payload: TAccessTokenPayload = {
      sub: id,
      ...data,
    };

    return await this.jwt_service.signAsync(payload);
  }
}
