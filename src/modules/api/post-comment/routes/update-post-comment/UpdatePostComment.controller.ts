import { Body, Param, Patch, Req } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { accessTokenWithAuthorization } from 'modules/api/authorization/decorators/accessTokenWithAuthorization.decorator';

import { postCommentController } from '../../decorators/postCommentController.decorator';
import { PostCommentIdParamDto } from '../../dto/param/PostCommentIdParam.dto';
import type { PostCommentDto } from '../../dto/PostComment.dto';
import { UpdatePostCommentDto } from '../../dto/UpdatePostComment.dto';
import { updatePostComment } from './decorators/updatePostComment.decorator';
import { UpdatePostCommentService } from './UpdatePostComment.service';

@postCommentController()
export class UpdatePostCommentController {
  constructor(private readonly update_post_comment: UpdatePostCommentService) {}

  @Patch(':comment_id')
  @updatePostComment()
  @accessTokenWithAuthorization()
  async patch(
    @Req() { user }: TAuthenticatedRequest,
    @Param() { comment_id: target_id }: PostCommentIdParamDto,
    @Body() data: UpdatePostCommentDto,
  ): Promise<PostCommentDto> {
    return await this.update_post_comment.run(user, target_id, data);
  }
}
