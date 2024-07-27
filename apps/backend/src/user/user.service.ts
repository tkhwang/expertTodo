import { Injectable } from '@nestjs/common';
import { FirebaseUserRepository } from 'src/firebase/firebaseUser.repository';

@Injectable()
export class UserService {
  constructor(private firebaseUserRepository: FirebaseUserRepository) {}
}
