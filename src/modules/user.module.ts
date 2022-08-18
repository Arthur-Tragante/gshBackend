import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from 'src/controllers/user.controller';
import { UserModel } from 'src/models/user.model';
import { UserService } from 'src/user/user.service';
@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  controllers: [UserController],
  providers:[UserService],
})
export class UserModule {}
