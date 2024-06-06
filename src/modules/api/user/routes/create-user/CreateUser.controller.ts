import { Body, Post } from '@nestjs/common';

import { userController } from '../../decorators/userController.decorator';
import { CreateUserDto } from '../../dto/CreateUser.dto';
import { CreateUserService } from './CreateUser.service';
import { createUser } from './decorators/createUser.decorator';

@userController()
export class CreateUserController {
  constructor(private readonly create_user: CreateUserService) {}

  @Post()
  @createUser()
  async post(@Body() data: CreateUserDto): Promise<void> {
    return await this.create_user.run(data);
  }
}
