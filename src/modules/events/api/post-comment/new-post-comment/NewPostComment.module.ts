import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'modules/database/repository/user/UserRepository.module';
import { EmailModule } from 'modules/email/Email.module';

import { NewPostCommentService } from './NewPostComment.service';
import { NewPostCommentHandler } from './NewPostCommentHandler';

@Module({
  imports: [EmailModule, UserRepositoryModule],
  providers: [NewPostCommentHandler, NewPostCommentService],
})
export class NewPostCommentModule {}
