import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import bcrypt from 'bcrypt';
import authenticationConfig from 'config/authentication.config';

@Injectable()
export class PasswordHasher {
  constructor(
    @Inject(authenticationConfig.KEY)
    private readonly config: ConfigType<typeof authenticationConfig>,
  ) {}

  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, this.config.password.rounds);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
