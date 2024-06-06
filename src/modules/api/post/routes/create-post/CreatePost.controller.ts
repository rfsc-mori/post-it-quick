import { Body, Post, Req } from '@nestjs/common';
import { TAuthenticatedRequest } from 'modules/api/authentication/types/authenticatedRequest.type';
import { AUTHORIZATION_RESOURCE } from 'modules/api/authorization/constants/authorizationResource.constant';
import { authorize } from 'modules/api/authorization/decorators/authorize.decorator';

import { postController } from '../../decorators/postController.decorator';
import { CreatePostDto } from '../../dto/CreatePost.dto';
import type { PostDto } from '../../dto/Post.dto';
import { CreatePostService } from './CreatePost.service';
import { createPost } from './decorators/createPost.decorator';

@postController()
export class CreatePostController {
  constructor(private readonly create_post: CreatePostService) {}

  @Post()
  @createPost()
  @authorize({
    resource: AUTHORIZATION_RESOURCE.POST,
    action: 'create',
    possession: 'own',
  })
  async post(
    @Req() { user }: TAuthenticatedRequest,
    @Body() data: CreatePostDto,
  ): Promise<PostDto> {
    return await this.create_post.run(user, data);
  }
}
