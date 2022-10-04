import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('dealership')
export class DealershipModel {
  @PrimaryGeneratedColumn()
  dls_id: number;

  @Column({ default: '' })
  dls_name?: string;

  @Column({ default: '' })
  dls_company_name?: string;

  @Column({ default: 0 })
  uf_id?: number;

  @Column({ default: '' })
  dls_cpf_cnpj?: string;

  @Column({ default: '' })
  dls_rg_ie?: string;

  @Column({ default: '' })
  dls_type?: string;

  @Column({ default: '' })
  dls_requirement1?: string;

  @Column({ default: '' })
  dls_requirement2?: string;

  @Column({ default: '' })
  dls_requirement3?: string;

  @Column({ default: '' })
  dls_requirement4?: string;

  @Column({ default: '' })
  dls_requirement5?: string;

  @Column({ default: '' })
  dls_requirement6?: string;

  @Column({ default: '' })
  dls_requirement_visto1?: string;

  @Column({ default: '' })
  dls_requirement_visto2?: string;

  @Column({ default: '' })
  dls_requirement_visto3?: string;

  @Column({ default: '' })
  dls_requirement_visto4?: string;

  @Column({ default: '' })
  dls_requirement_visto5?: string;

  @Column({ default: '' })
  dls_requirement_visto6?: string;
}
