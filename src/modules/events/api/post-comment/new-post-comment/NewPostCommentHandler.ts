import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { TPost } from 'modules/api/post/types/post.type';
import { TPostComment } from 'modules/api/post-comment/types/postComment.type';
import { EVENT } from 'modules/events/constants/event.constant';

import { NewPostCommentService } from './NewPostComment.service';

@Injectable()
export class NewPostCommentHandler {
  private readonly logger = new Logger(NewPostCommentHandler.name);

  constructor(private readonly new_post_comment: NewPostCommentService) {}

  @OnEvent(EVENT.API.POST_COMMENT.NEW)
  async handle(post: TPost, comment: TPostComment): Promise<void> {
    await this.new_post_comment.run(post, comment).catch((error: Error) => {
      this.logger.error(error);
    });
  }
}
