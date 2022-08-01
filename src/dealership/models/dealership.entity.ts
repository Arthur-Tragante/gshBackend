import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dealership')
export class DealershipEntity {
  @PrimaryGeneratedColumn()
  dls_id: number;

  @Column({ default: '' })
  dls_name?: string;

  @Column({ default: '' })
  dls_company_name?: string;

  //   @Column({ default: '' })
  //   dls_email?: string;

  //   @Column({ default: '' })
  //   dls_password?: string;

  @Column({ default: 0 })
  uf_id?: number;

  @Column({ default: 0 })
  dls_cpf_cnpj?: number;

  @Column({ default: 0 })
  dls_rg_ie?: number;

  @Column({ default: '' })
  dls_type?: string;

  @Column({ default: '' })
  dls_requirements?: string;
}
