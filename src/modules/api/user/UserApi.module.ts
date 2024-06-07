import { Module } from '@nestjs/common';

import { CreateUserModule } from './routes/create-user/CreateUser.module';
import { DeleteCurrentUserModule } from './routes/delete-current-user/DeleteCurrentUser.module';
import { FindCurrentUserModule } from './routes/find-current-user/FindCurrentUser.module';
import { FindUserModule } from './routes/find-user/FindUser.module';
import { UpdateCurrentUserModule } from './routes/update-current-user/UpdateCurrentUser.module';

@Module({
  imports: [
    CreateUserModule,
    DeleteCurrentUserModule,
    UpdateCurrentUserModule,
    FindCurrentUserModule,
    FindUserModule,
  ],
})
export class UserApiModule {}
