import { Module } from '@nestjs/common';

import { CreateUserModule } from './routes/create-user/CreateUser.module';

@Module({
  imports: [CreateUserModule],
})
export class UserApiModule {}
