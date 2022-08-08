import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customer')
export class CustomerModel {
  @PrimaryGeneratedColumn()
  cli_id: number;

  @Column({ length: 120 })
  cli_name?: string;

  @Column('int')
  cli_cpf_cnpj?: number;

  @Column('int')
  cli_rg_ie?: number;

  @Column({ length: 120 })
  cli_company_name?: string;

  @Column()
  cli_date?: Date;

  @Column({ length: 255 })
  cli_email?: string;

  @Column('int')
  cli_celphone?: number;

  @Column('int')
  cli_phone1?: number;

  @Column('int')
  cli_phone2?: number;

  @Column({ default: '' })
  cli_active?: string;

  @Column({ default: '' })
  cli_address?: string;

  @Column({ default: 0 })
  uf_id?: number;

  @Column({ default: 0 })
  cli_ibge_code?: number;

  @Column({ default: '' })
  cli_obs?: string;

  @Column({ default: '' })
  cli_type?: string;
}
