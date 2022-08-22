import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customer')
export class CustomerModel {
  @PrimaryGeneratedColumn()
  cli_id: number;

  @Column({ length: 120 })
  cli_name?: string;

  @Column({ length: 15 })
  cli_password?: string;

  @Column({ length: 15 })
  cli_cpf_cnpj?: string;

  @Column('int')
  cli_rg_ie?: number;

  @Column({ length: 120 })
  cli_company_name?: string;

  @Column({ default: '' })
  cli_date?: string;

  @Column({ length: 255 })
  cli_email?: string;

  @Column('int')
  cli_cellphone?: number;

  @Column('int')
  cli_phone1?: number;

  @Column('int')
  cli_phone2?: number;

  @Column({ default: '' })
  cli_active?: string;

  @Column({ default: '' })
  cli_address?: string;

  @Column({ default: '' })
  cli_uf_name?: string;

  @Column({ default: 0 })
  cli_ibge_code?: number;

  @Column({ default: '' })
  cli_obs?: string;

  @Column({ default: '' })
  cli_type?: string;
}
