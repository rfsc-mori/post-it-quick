import { Module } from '@nestjs/common';

import { AuthenticationApiModule } from './authentication/AuthenticationApi.module';
import { AuthorizationApiModule } from './authorization/AuthorizationApi.module';
import { PostApiModule } from './post/PostApi.module';
import { PostReactionApiModule } from './post-reactions/PostReactionApi.module';
import { RootApiModule } from './root/RootApi.module';
import { UserApiModule } from './user/UserApi.module';
import { UserProfileApiModule } from './user-profile/UserProfileApi.module';

@Module({
  imports: [
    RootApiModule,
    UserApiModule,
    AuthenticationApiModule,
    AuthorizationApiModule,
    UserProfileApiModule,
    PostApiModule,
    PostReactionApiModule,
  ],
})
export class ApiModule {}
