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
  pjt_cli_type: string;

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

  @Column({ default: '' })
  cli_cpf_cnpj: string;

  @Column({ default: 0 })
  cli_phone2: number;

  @Column({ default: 0 })
  cli_phone1: number;

  @Column({ default: 0 })
  cli_cellphone: number;

  @Column({ default: '' })
  sts_name_next: string;

  @Column({ default: 0 })
  pjt_os: number;

  @Column({ default: 0 })
  pjt_cable_gauge: number;

  @Column({ default: '' })
  pjt_connection: string;

  @Column({ default: '' })
  pjt_module_brand2: string;
  @Column({ default: '' })
  pjt_module_model2: string;
  @Column({ default: '' })
  pjt_module_maxpotency2: string;
  @Column({ default: '' })
  pjt_module_modules2: string;
  @Column({ default: '' })
  pjt_module_obs2: string;
  @Column({ default: '' })
  pjt_module_brand3: string;
  @Column({ default: '' })
  pjt_module_model3: string;
  @Column({ default: '' })
  pjt_module_maxpotency3: string;
  @Column({ default: '' })
  pjt_module_modules3: string;
  @Column({ default: '' })
  pjt_module_obs3: string;
  @Column({ default: '' })
  pjt_module_brand4: string;
  @Column({ default: '' })
  pjt_module_model4: string;
  @Column({ default: '' })
  pjt_module_maxpotency4: string;
  @Column({ default: '' })
  pjt_module_modules4: string;
  @Column({ default: '' })
  pjt_module_obs4: string;
  @Column({ default: '' })
  pjt_module_brand5: string;
  @Column({ default: '' })
  pjt_module_model5: string;
  @Column({ default: '' })
  pjt_module_maxpotency5: string;
  @Column({ default: '' })
  pjt_module_modules5: string;
  @Column({ default: '' })
  pjt_module_obs5: string;
  @Column({ default: '' })
  pjt_inverter_brand2: string;
  @Column({ default: '' })
  pjt_inverter_model2: string;
  @Column({ default: '' })
  pjt_inverter_maxpotency2: string;
  @Column({ default: '' })
  pjt_inverter_modules2: string;
  @Column({ default: '' })
  pjt_inverter_obs2: string;
  @Column({ default: '' })
  pjt_inverter_brand3: string;
  @Column({ default: '' })
  pjt_inverter_model3: string;
  @Column({ default: '' })
  pjt_inverter_maxpotency3: string;
  @Column({ default: '' })
  pjt_inverter_modules3: string;
  @Column({ default: '' })
  pjt_inverter_obs3: string;
  @Column({ default: '' })
  pjt_inverter_brand4: string;
  @Column({ default: '' })
  pjt_inverter_model4: string;
  @Column({ default: '' })
  pjt_inverter_maxpotency4: string;
  @Column({ default: '' })
  pjt_inverter_modules4: string;
  @Column({ default: '' })
  pjt_inverter_obs4: string;
  @Column({ default: '' })
  pjt_inverter_brand5: string;
  @Column({ default: '' })
  pjt_inverter_model5: string;
  @Column({ default: '' })
  pjt_inverter_maxpotency5: string;
  @Column({ default: '' })
  pjt_inverter_modules5: string;
  @Column({ default: '' })
  pjt_inverter_obs5: string;
  @Column({ default: '' })
  pjt_beneficiary_unitynumber: string;
  @Column({ default: '' })
  pjt_beneficiary_number1: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage1: string;
  @Column({ default: '' })
  pjt_beneficiary_number2: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage2: string;
  @Column({ default: '' })
  pjt_beneficiary_number3: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage3: string;
  @Column({ default: '' })
  pjt_beneficiary_number4: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage4: string;
  @Column({ default: '' })
  pjt_beneficiary_number5: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage5: string;
  @Column({ default: '' })
  pjt_code: number;
}
