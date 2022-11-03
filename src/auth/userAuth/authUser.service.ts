import { Injectable } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Injectable()
export class AuthService {
  constructor(private UserService: UserService) {}

  async validateUser(usr_cpf_cnpj: string, usr_password: string): Promise<any> {
    const user = await this.UserService.findOne(usr_cpf_cnpj);
    if (user && user.usr_password === usr_password) {
      const { usr_password, ...result } = user;
      console.log(result)
      return result;

    }
    return null;
  }
}
