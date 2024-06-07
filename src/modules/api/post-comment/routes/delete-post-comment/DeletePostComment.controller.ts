import { Delete, Param, Req } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { accessTokenWithAuthorization } from 'modules/api/authorization/decorators/accessTokenWithAuthorization.decorator';

import { postCommentController } from '../../decorators/postCommentController.decorator';
import { PostCommentIdParamDto } from '../../dto/param/PostCommentIdParam.dto';
import { deletePostComment } from './decorators/deletePostComment.decorator';
import { DeletePostCommentService } from './DeletePostComment.service';

@postCommentController()
export class DeletePostCommentController {
  constructor(private readonly delete_post_comment: DeletePostCommentService) {}

  @Delete(':comment_id')
  @deletePostComment()
  @accessTokenWithAuthorization()
  async patch(
    @Req() { user }: TAuthenticatedRequest,
    @Param() { comment_id: target_id }: PostCommentIdParamDto,
  ): Promise<void> {
    await this.delete_post_comment.run(user, target_id);
  }
}
