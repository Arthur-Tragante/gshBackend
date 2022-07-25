import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  usr_id: number;

  @Column({ default: '' })
  usr_name: string;

  @Column({ default: '' })
  usr_email: string;

  @Column({ default: '' })
  usr_password: string;

  @Column({ default: 0 })
  usr_cpf_cnpj: number;

  @Column({ default: '' })
  usr_type: string;
}
