import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from 'src/models/user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private userModel: Repository<UserModel>,
  ) {}
  getAll() {
    return this.userModel.find();
  }
  async findOne(usr_cpf_cnpj: string): Promise<UserModel | undefined> {
    const user = await this.userModel.findOne({ where: { usr_cpf_cnpj } });

    if (!user) {
      throw new NotFoundException(
        `Não foi encontrado um usuário com o documento: ${usr_cpf_cnpj}`,
      );
    }
    return this.userModel.findOne({ where: { usr_cpf_cnpj } });
  }
}
