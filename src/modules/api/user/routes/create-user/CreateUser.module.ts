import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'modules/database/repository/user/UserRepository.module';
import { PasswordHasherModule } from 'utils/api/authentication/password-hasher/PasswordHasher.module';
import { PasswordValidatorModule } from 'utils/api/authentication/password-validator/PasswordValidator.module';

import { CreateUserController } from './CreateUser.controller';
import { CreateUserService } from './CreateUser.service';

@Module({
  imports: [
    UserRepositoryModule,
    PasswordValidatorModule,
    PasswordHasherModule,
  ],
  providers: [CreateUserService],
  controllers: [CreateUserController],
})
export class CreateUserModule {}
