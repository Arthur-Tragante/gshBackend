import { IsString, IsInt, Min, MaxLength, IsEmail } from 'class-validator';

export class UserSchema {
  usr_name: string;
  usr_email: string;
  usr_password: string;
  usr_cpf_cnpj: string;
  usr_type: string;
}
