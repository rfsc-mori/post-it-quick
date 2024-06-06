import { Module } from '@nestjs/common';

import { PasswordHasher } from './PasswordHasher';

@Module({
  providers: [PasswordHasher],
  exports: [PasswordHasher],
})
export class PasswordHasherModule {}
