import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from 'src/models/user.model';
import { Repository } from 'typeorm';
import { UserSchema } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private userModel: Repository<UserModel>,
  ) {}
  getAll() {
    return this.userModel.find();
  }
 
}
