import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('integrator')
export class IntegratorModel {
  @PrimaryGeneratedColumn()
  int_id: number;

  @Column({ default: '' })
  int_name?: string;

  @Column({ default: '' })
  int_password: string;
  @Column({ default: 0 })
  int_cpf_cnpj?: string;

  @Column({ default: '' })
  int_rg_ie?: string;

  @Column({ default: '' })
  int_company_name?: string;

  @Column({ default: '' })
  int_date?: string;

  @Column({ default: '' })
  int_email?: string;

  @Column({ default: 0 })
  int_celphone?: number;

  @Column({ default: 0 })
  int_phone1?: number;

  @Column({ default: 0 })
  int_phone2?: number;

  @Column({ default: '' })
  int_active?: string;

  @Column({ default: 0 })
  dls_id?: number;

  @Column({ default: '' })
  int_address?: string;

  @Column({ default: '' })
  int_uf_name?: string;

  @Column({ default: 0 })
  int_ibge_code?: number;

  @Column({ default: '' })
  int_obs?: string;

  @Column({ default: '' })
  int_type?: string;
}
