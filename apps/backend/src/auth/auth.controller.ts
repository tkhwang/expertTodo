import { Body, Controller, Post } from '@nestjs/common';
import { AuthSignUpRequest } from '@whatTodo/models';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  async signUp(@Body() authSignUpRequest: AuthSignUpRequest) {
    return this.usersService.createUser(authSignUpRequest);
  }
}
