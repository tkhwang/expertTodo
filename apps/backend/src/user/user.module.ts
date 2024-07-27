import { Module } from '@nestjs/common';
import { FirebaseModule } from 'src/firebase/firebase.module';
import { UserService } from './user.service';

@Module({
  imports: [FirebaseModule],
  controllers: [],
  providers: [UserService],
})
export class UserModule {}
