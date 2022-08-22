import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserModel {
  @PrimaryGeneratedColumn()
  usr_id: number;

  @Column({ length: 120 })
  usr_name: string;

  @Column({ length: 255 })
  usr_email: string;

  @Column({ length: 50 })
  usr_password: string;

  @Column({ length: 15 })
  usr_cpf_cnpj: string;

  @Column({ default: '' })
  usr_type: string;
}
