import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { UserNotFoundException } from 'exceptions/api/user/UserNotFound.exception';
import type { TPost } from 'modules/api/post/types/post.type';
import type { TPostComment } from 'modules/api/post-comment/types/postComment.type';
import { UserRepository } from 'modules/database/repository/user/UserRepository';

@Injectable()
export class NewPostCommentService {
  constructor(
    private readonly mailer: MailerService,
    private readonly user_repository: UserRepository,
  ) {}

  async run(post: TPost, comment: TPostComment): Promise<void> {
    const post_author = await this.user_repository.findById(post.user_id);

    if (!post_author) {
      throw new UserNotFoundException();
    }

    const comment_author = await this.user_repository.findById(comment.user_id);

    await this.mailer.sendMail({
      to: post_author.email,
      subject: `Novo comentário em "${post.title}"!`,
      text: `Você recebeu um novo comentário em sua publicação "${post.title}!"

De: ${comment_author?.name || 'Anônimo'}

Comentário:
${comment.description}`,
    });
  }
}
