import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project')
export class ProjectModel {
  @PrimaryGeneratedColumn()
  pjt_id: number;

  @Column({ default: '' })
  sts_name: string;

  @Column()
  pjt_next_date: string;

  @Column({ default: '' })
  int_name: string;

  @Column({ default: 0 })
  uf_name: string;

  @Column({ default: 0 })
  dls_name: string;

  @Column({ default: 0 })
  cli_name: string;

  @Column({ default: '' })
  pjt_bill_onwer: string;

  @Column({ default: '' })
  pjt_cli_obs: string;

  @Column({ default: '' })
  pjt_self_consume: string;

  @Column({ default: '' })
  pjt_altitude: string;

  @Column({ default: '' })
  pjt_longitude: string;

  @Column({ default: 0 })
  pjt_gcb_voltage: number;

  @Column({ default: 0 })
  pjt_closest_post: number;

  @Column({ default: '' })
  pjt_module_brand: string;

  @Column({ default: '' })
  pjt_module_model: string;

  @Column({ default: 0 })
  pjt_module_maxpotency: number;

  @Column({ default: 0 })
  pjt_module_modules: number;

  @Column({ default: '' })
  pjt_module_obs: string;

  @Column({ default: '' })
  pjt_inverter_brand: string;

  @Column({ default: '' })
  pjt_inverter_model: string;

  @Column({ default: 0 })
  pjt_inverter_maxpotency: number;

  @Column({ default: 0 })
  pjt_inverter_modules: number;

  @Column({ default: '' })
  pjt_inverter_obs: string;

  @Column({ default: '' })
  pjt_files_url: string;

  @Column({ default: '' })
  pjt_due: string;

  @Column({ default: '' })
  cli_email: string;

  @Column({ default: '' })
  cli_initial_date: string;

  @Column({ default: 0 })
  cli_rg_ie: number;

  @Column({ default: 0 })
  cli_cpf_cnpj: number;

  @Column({ default: 0 })
  cli_phone2: number;

  @Column({ default: 0 })
  cli_phone1: number;

  @Column({ default: 0 })
  cli_cellphone: number;

  @Column({ default: "" })
  sts_name_next:string

  @Column({ default: 0 })
  pjt_os: number;
}
