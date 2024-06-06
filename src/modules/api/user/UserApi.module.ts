import { Module } from '@nestjs/common';

import { CreateUserModule } from './routes/create-user/CreateUser.module';
import { DeleteCurrentUserModule } from './routes/delete-current-user/DeleteCurrentUser.module';

@Module({
  imports: [CreateUserModule, DeleteCurrentUserModule],
})
export class UserApiModule {}
