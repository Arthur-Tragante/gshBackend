import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customer')
export class CustomerModel {
  @PrimaryGeneratedColumn()
  cli_id: number;

  @Column({ default: '' })
  cli_name?: string;

  @Column({ default: '' })
  cli_password?: string;

  @Column({ default: '' })
  cli_cpf_cnpj?: string;

  @Column('int')
  cli_rg_ie?: string;

  @Column({ default: '' })
  cli_company_name?: string;

  @Column({ default: '' })
  cli_date?: string;

  @Column({ default: '' })
  cli_email?: string;

  @Column({ default: '' })
  cli_active?: string;

  @Column({ default: '' })
  cli_address?: string;

  @Column({ default: '' })
  cli_uf_name?: string;

  @Column({ default: '' })
  cli_obs?: string;

  @Column({ default: '' })
  cli_type?: string;

  @Column({ default: 0 })
  cli_cellphone?: number;

  @Column({ default: 0 })
  cli_phone1?: number;

  @Column({ default: 0 })
  cli_phone2?: number;

  @Column({ default: 0 })
  cli_ibge_code?: number;
}
