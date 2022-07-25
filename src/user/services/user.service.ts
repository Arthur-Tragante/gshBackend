import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserPostEntity } from '../models/post.entity';
import { User } from '../models/post.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserPostEntity)
    private readonly userRepository: Repository<UserPostEntity>,
  ) {}

  createUser(userPost: User): Observable<User> {
    return from(this.userRepository.save(userPost));
  }

  findAllUsers(): Observable<User[]> {
    return from(this.userRepository.find());
  }

  updateUser(id: number, user: User): Observable<UpdateResult> {
    return from(this.userRepository.update(id, user));
  }

  deleteUser(id: number): Observable<DeleteResult> {
    return from(this.userRepository.delete(id));
  }
}
