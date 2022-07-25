import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { UserPostEntity } from './models/post.entity';
import { UserService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserPostEntity])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
