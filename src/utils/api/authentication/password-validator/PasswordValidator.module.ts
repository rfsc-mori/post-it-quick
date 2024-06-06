import { Module } from '@nestjs/common';

import { PasswordValidator } from './PasswordValidator';

@Module({
  providers: [PasswordValidator],
  exports: [PasswordValidator],
})
export class PasswordValidatorModule {}
