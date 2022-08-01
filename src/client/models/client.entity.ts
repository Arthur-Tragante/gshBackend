import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('client')
export class ClientEntity {
  @PrimaryGeneratedColumn()
  cli_id: number;

  @Column({ default: '' })
  cli_name?: string;

  @Column({ default: 0 })
  cli_cpf_cnpj?: number;

  @Column({ default: 0 })
  cli_rg_ie?: number;

  @Column({ default: '' })
  cli_company_name?: string;

  @Column()
  cli_date?: Date;

  @Column({ default: '' })
  cli_email?: string;

  @Column({ default: 0 })
  cli_celphone?: number;

  @Column({ default: 0 })
  cli_phone1?: number;

  @Column({ default: 0 })
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
