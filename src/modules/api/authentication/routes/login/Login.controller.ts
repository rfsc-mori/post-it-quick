import { HttpCode, HttpStatus, Post, Req } from '@nestjs/common';

import { authenticationController } from '../../decorators/authenticationController.decorator';
import { localAuthenticationGuard } from '../../decorators/guards/localAuthenticationGuard.decorator';
import type { LoginReplyDto } from '../../dto/LoginReply.dto';
import { TAuthenticatedRequest } from '../../types/authenticatedRequest.type';
import { login } from './decorators/login.decorator';
import { LoginService } from './Login.service';

@authenticationController()
export class LoginController {
  constructor(private readonly login: LoginService) {}

  @Post('login')
  @login()
  @localAuthenticationGuard()
  @HttpCode(HttpStatus.OK)
  async post(@Req() { user }: TAuthenticatedRequest): Promise<LoginReplyDto> {
    return await this.login.run(user);
  }
}
