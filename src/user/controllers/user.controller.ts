import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { User } from '../models/post.interface';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() User: User): Observable<User> {
    return this.userService.createUser(User);
  }

  @Get()
  findAll(): Observable<User[]> {
    return this.userService.findAllUsers();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() UserPost: User,
  ): Observable<UpdateResult> {
    return this.userService.updateUser(id, UserPost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.userService.deleteUser(id);
  }
}
