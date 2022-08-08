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

  @Column('int')
  usr_cpf_cnpj: number;

  @Column({ default: '' })
  usr_type: string;
}
