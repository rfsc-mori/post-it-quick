import { NotFoundException } from '@nestjs/common';
import { POST_COMMENT_ERROR_MESSAGES } from 'messages/error/api/post-comment/postCommentErrorMessages.constant';

export class PostCommentNotFoundException extends NotFoundException {
  constructor() {
    super(POST_COMMENT_ERROR_MESSAGES.POST_COMMENT_NOT_FOUND);
  }
}
