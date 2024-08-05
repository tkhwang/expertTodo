import { Injectable } from '@nestjs/common';
import { AuthSignUpRequest } from '@whatTodo/models';

@Injectable()
export class UsersService {
  async createUser(authSignUpRequest: AuthSignUpRequest) {
    return Promise.resolve({
      ...authSignUpRequest,
    });
  }
}
