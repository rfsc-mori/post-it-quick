import { applyDecorators } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { POST_DESCRIPTION_MESSAGES } from 'messages/description/api/post/postDescriptionMessages.constant';
import { apiWithBodyValidator } from 'modules/api/decorators/apiWithBodyValidator.decorator';
import { PostDto } from 'modules/api/post/dto/Post.dto';

export function createPost(): MethodDecorator {
  return applyDecorators(
    apiWithBodyValidator(),

    ApiOperation({
      summary: POST_DESCRIPTION_MESSAGES.CREATE_POST_API,
    }),

    ApiCreatedResponse({
      description: POST_DESCRIPTION_MESSAGES.CREATE_POST_CREATED,
      type: PostDto,
    }),
  );
}
