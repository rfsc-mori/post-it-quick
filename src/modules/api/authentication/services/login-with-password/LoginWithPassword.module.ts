import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'modules/database/repository/user/UserRepository.module';
import { UserCredentialsRepositoryModule } from 'modules/database/repository/user-credentials/UserCredentialsRepository.module';
import { PasswordHasherModule } from 'utils/api/authentication/password-hasher/PasswordHasher.module';

import { LoginWithPasswordService } from './LoginWithPassword.service';

@Module({
  imports: [
    UserRepositoryModule,
    UserCredentialsRepositoryModule,
    PasswordHasherModule,
  ],
  providers: [LoginWithPasswordService],
  exports: [LoginWithPasswordService],
})
export class LoginWithPasswordModule {}
