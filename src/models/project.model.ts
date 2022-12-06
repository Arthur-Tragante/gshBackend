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

  @Column({ default: '' })
  int_email: string;

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
  pjt_gcb_voltage: string;

  @Column({ default: 0 })
  pjt_closest_post: string;

  @Column({ default: '' })
  pjt_module_brand: string;

  @Column({ default: '' })
  pjt_module_model: string;

  @Column({ default: 0 })
  pjt_module_maxpotency: string;

  @Column({ default: 0 })
  pjt_module_modules: string;

  @Column({ default: '' })
  pjt_module_obs: string;

  @Column({ default: '' })
  pjt_inverter_brand: string;

  @Column({ default: '' })
  pjt_inverter_model: string;

  @Column({ default: 0 })
  pjt_inverter_maxpotency: string;

  @Column({ default: 0 })
  pjt_inverter_modules: string;

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

  @Column()
  cli_rg_ie: string;

  @Column({ default: '' })
  cli_cpf_cnpj: string;

  @Column({ default: 0 })
  cli_phone2: string;

  @Column({ default: 0 })
  cli_phone1: string;

  @Column({ default: 0 })
  cli_cellphone: string;

  @Column({ default: '' })
  sts_name_next: string;

  @Column({ default: 0 })
  pjt_os: string;

  @Column({ default: 0 })
  pjt_cable_gauge: string;

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
  pjt_inverter_brand6: string;
  @Column({ default: '' })
  pjt_inverter_model6: string;
  @Column({ default: '' })
  pjt_inverter_maxpotency6: string;
  @Column({ default: '' })
  pjt_inverter_modules6: string;
  @Column({ default: '' })
  pjt_inverter_obs6: string;
  @Column({ default: '' })
  pjt_inverter_brand7: string;
  @Column({ default: '' })
  pjt_inverter_model7: string;
  @Column({ default: '' })
  pjt_inverter_maxpotency7: string;
  @Column({ default: '' })
  pjt_inverter_modules7: string;
  @Column({ default: '' })
  pjt_inverter_obs7: string;
  @Column({ default: '' })
  pjt_inverter_brand8: string;
  @Column({ default: '' })
  pjt_inverter_model8: string;
  @Column({ default: '' })
  pjt_inverter_maxpotency8: string;
  @Column({ default: '' })
  pjt_inverter_modules8: string;
  @Column({ default: '' })
  pjt_inverter_obs8: string;
  @Column({ default: '' })
  pjt_inverter_brand9: string;
  @Column({ default: '' })
  pjt_inverter_model9: string;
  @Column({ default: '' })
  pjt_inverter_maxpotency9: string;
  @Column({ default: '' })
  pjt_inverter_modules9: string;
  @Column({ default: '' })
  pjt_inverter_obs9: string;
  @Column({ default: '' })
  pjt_inverter_brand10: string;
  @Column({ default: '' })
  pjt_inverter_model10: string;
  @Column({ default: '' })
  pjt_inverter_maxpotency10: string;
  @Column({ default: '' })
  pjt_inverter_modules10: string;
  @Column({ default: '' })
  pjt_inverter_obs10: string;
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
  @Column({ default: '' })
  pjt_beneficiary_number6: string;
  @Column({ default: '' })
  pjt_beneficiary_number7: string;
  @Column({ default: '' })
  pjt_beneficiary_number8: string;
  @Column({ default: '' })
  pjt_beneficiary_number9: string;
  @Column({ default: '' })
  pjt_beneficiary_number10: string;
  @Column({ default: '' })
  pjt_beneficiary_number11: string;
  @Column({ default: '' })
  pjt_beneficiary_number12: string;
  @Column({ default: '' })
  pjt_beneficiary_number13: string;
  @Column({ default: '' })
  pjt_beneficiary_number14: string;
  @Column({ default: '' })
  pjt_beneficiary_number15: string;
  @Column({ default: '' })
  pjt_beneficiary_number16: string;
  @Column({ default: '' })
  pjt_beneficiary_number17: string;
  @Column({ default: '' })
  pjt_beneficiary_number18: string;
  @Column({ default: '' })
  pjt_beneficiary_number19: string;
  @Column({ default: '' })
  pjt_beneficiary_number20: string;
  @Column({ default: '' })
  pjt_beneficiary_number21: string;
  @Column({ default: '' })
  pjt_beneficiary_number22: string;
  @Column({ default: '' })
  pjt_beneficiary_number23: string;
  @Column({ default: '' })
  pjt_beneficiary_number24: string;
  @Column({ default: '' })
  pjt_beneficiary_number25: string;
  @Column({ default: '' })
  pjt_beneficiary_number26: string;
  @Column({ default: '' })
  pjt_beneficiary_number27: string;
  @Column({ default: '' })
  pjt_beneficiary_number28: string;
  @Column({ default: '' })
  pjt_beneficiary_number29: string;
  @Column({ default: '' })
  pjt_beneficiary_number30: string;
  @Column({ default: '' })
  pjt_beneficiary_number31: string;
  @Column({ default: '' })
  pjt_beneficiary_number32: string;
  @Column({ default: '' })
  pjt_beneficiary_number33: string;
  @Column({ default: '' })
  pjt_beneficiary_number34: string;
  @Column({ default: '' })
  pjt_beneficiary_number35: string;
  @Column({ default: '' })
  pjt_beneficiary_number36: string;
  @Column({ default: '' })
  pjt_beneficiary_number37: string;
  @Column({ default: '' })
  pjt_beneficiary_number38: string;
  @Column({ default: '' })
  pjt_beneficiary_number39: string;
  @Column({ default: '' })
  pjt_beneficiary_number40: string;
  @Column({ default: '' })
  pjt_beneficiary_number41: string;
  @Column({ default: '' })
  pjt_beneficiary_number42: string;
  @Column({ default: '' })
  pjt_beneficiary_number43: string;
  @Column({ default: '' })
  pjt_beneficiary_number44: string;
  @Column({ default: '' })
  pjt_beneficiary_number45: string;
  @Column({ default: '' })
  pjt_beneficiary_number46: string;
  @Column({ default: '' })
  pjt_beneficiary_number47: string;
  @Column({ default: '' })
  pjt_beneficiary_number48: string;
  @Column({ default: '' })
  pjt_beneficiary_number49: string;
  @Column({ default: '' })
  pjt_beneficiary_number50: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage6: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage7: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage8: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage9: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage10: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage11: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage12: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage13: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage14: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage15: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage16: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage17: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage18: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage19: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage20: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage21: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage22: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage23: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage24: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage25: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage26: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage27: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage28: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage29: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage30: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage31: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage32: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage33: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage34: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage35: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage36: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage37: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage38: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage39: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage40: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage41: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage42: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage43: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage44: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage45: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage46: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage47: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage48: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage49: string;
  @Column({ default: '' })
  pjt_beneficiary_percentage50: string;
  @Column({ default: '' })
  pjt_module_brand6: string;
  @Column({ default: '' })
  pjt_module_brand7: string;
  @Column({ default: '' }) pjt_module_brand8: string;
  @Column({ default: '' }) pjt_module_brand9: string;
  @Column({ default: '' }) pjt_module_brand10: string;
  @Column({ default: '' }) pjt_module_brand11: string;
  @Column({ default: '' }) pjt_module_brand12: string;
  @Column({ default: '' }) pjt_module_brand13: string;
  @Column({ default: '' }) pjt_module_brand14: string;
  @Column({ default: '' }) pjt_module_brand15: string;
  @Column({ default: '' }) pjt_module_brand16: string;
  @Column({ default: '' }) pjt_module_brand17: string;
  @Column({ default: '' }) pjt_module_brand18: string;
  @Column({ default: '' }) pjt_module_brand19: string;
  @Column({ default: '' }) pjt_module_brand20: string;
  @Column({ default: '' }) pjt_module_brand21: string;
  @Column({ default: '' }) pjt_module_brand22: string;
  @Column({ default: '' }) pjt_module_brand23: string;
  @Column({ default: '' }) pjt_module_brand24: string;
  @Column({ default: '' }) pjt_module_brand25: string;
  @Column({ default: '' }) pjt_module_brand26: string;
  @Column({ default: '' }) pjt_module_brand27: string;
  @Column({ default: '' }) pjt_module_brand28: string;
  @Column({ default: '' }) pjt_module_brand29: string;
  @Column({ default: '' }) pjt_module_brand30: string;
  @Column({ default: '' }) pjt_module_brand31: string;
  @Column({ default: '' }) pjt_module_brand32: string;
  @Column({ default: '' }) pjt_module_brand33: string;
  @Column({ default: '' }) pjt_module_brand34: string;
  @Column({ default: '' }) pjt_module_brand35: string;
  @Column({ default: '' }) pjt_module_brand36: string;
  @Column({ default: '' }) pjt_module_brand37: string;
  @Column({ default: '' }) pjt_module_brand38: string;
  @Column({ default: '' }) pjt_module_brand39: string;
  @Column({ default: '' }) pjt_module_brand40: string;
  @Column({ default: '' }) pjt_module_brand41: string;
  @Column({ default: '' }) pjt_module_brand42: string;
  @Column({ default: '' }) pjt_module_brand43: string;
  @Column({ default: '' }) pjt_module_brand44: string;
  @Column({ default: '' }) pjt_module_brand45: string;
  @Column({ default: '' }) pjt_module_brand46: string;
  @Column({ default: '' }) pjt_module_brand47: string;
  @Column({ default: '' }) pjt_module_brand48: string;
  @Column({ default: '' }) pjt_module_brand49: string;
  @Column({ default: '' }) pjt_module_brand50: string;
  @Column({ default: '' }) pjt_module_model6: string;
  @Column({ default: '' }) pjt_module_model7: string;
  @Column({ default: '' }) pjt_module_model8: string;
  @Column({ default: '' }) pjt_module_model9: string;
  @Column({ default: '' }) pjt_module_model10: string;
  @Column({ default: '' }) pjt_module_model11: string;
  @Column({ default: '' }) pjt_module_model12: string;
  @Column({ default: '' }) pjt_module_model13: string;
  @Column({ default: '' }) pjt_module_model14: string;
  @Column({ default: '' }) pjt_module_model15: string;
  @Column({ default: '' }) pjt_module_model16: string;
  @Column({ default: '' }) pjt_module_model17: string;
  @Column({ default: '' }) pjt_module_model18: string;
  @Column({ default: '' }) pjt_module_model19: string;
  @Column({ default: '' }) pjt_module_model20: string;
  @Column({ default: '' }) pjt_module_model21: string;
  @Column({ default: '' }) pjt_module_model22: string;
  @Column({ default: '' }) pjt_module_model23: string;
  @Column({ default: '' }) pjt_module_model24: string;
  @Column({ default: '' }) pjt_module_model25: string;
  @Column({ default: '' }) pjt_module_model26: string;
  @Column({ default: '' }) pjt_module_model27: string;
  @Column({ default: '' }) pjt_module_model28: string;
  @Column({ default: '' }) pjt_module_model29: string;
  @Column({ default: '' }) pjt_module_model30: string;
  @Column({ default: '' }) pjt_module_model31: string;
  @Column({ default: '' }) pjt_module_model32: string;
  @Column({ default: '' }) pjt_module_model33: string;
  @Column({ default: '' }) pjt_module_model34: string;
  @Column({ default: '' }) pjt_module_model35: string;
  @Column({ default: '' }) pjt_module_model36: string;
  @Column({ default: '' }) pjt_module_model37: string;
  @Column({ default: '' }) pjt_module_model38: string;
  @Column({ default: '' }) pjt_module_model39: string;
  @Column({ default: '' }) pjt_module_model40: string;
  @Column({ default: '' }) pjt_module_model41: string;
  @Column({ default: '' }) pjt_module_model42: string;
  @Column({ default: '' }) pjt_module_model43: string;
  @Column({ default: '' }) pjt_module_model44: string;
  @Column({ default: '' }) pjt_module_model45: string;
  @Column({ default: '' }) pjt_module_model46: string;
  @Column({ default: '' }) pjt_module_model47: string;
  @Column({ default: '' }) pjt_module_model48: string;
  @Column({ default: '' }) pjt_module_model49: string;
  @Column({ default: '' }) pjt_module_model50: string;
  @Column({ default: '' }) pjt_module_maxpotency6: string;
  @Column({ default: '' }) pjt_module_maxpotency7: string;
  @Column({ default: '' }) pjt_module_maxpotency8: string;
  @Column({ default: '' }) pjt_module_maxpotency9: string;
  @Column({ default: '' }) pjt_module_maxpotency10: string;
  @Column({ default: '' }) pjt_module_maxpotency11: string;
  @Column({ default: '' }) pjt_module_maxpotency12: string;
  @Column({ default: '' }) pjt_module_maxpotency13: string;
  @Column({ default: '' }) pjt_module_maxpotency14: string;
  @Column({ default: '' }) pjt_module_maxpotency15: string;
  @Column({ default: '' }) pjt_module_maxpotency16: string;
  @Column({ default: '' }) pjt_module_maxpotency17: string;
  @Column({ default: '' }) pjt_module_maxpotency18: string;
  @Column({ default: '' }) pjt_module_maxpotency19: string;
  @Column({ default: '' }) pjt_module_maxpotency20: string;
  @Column({ default: '' }) pjt_module_maxpotency21: string;
  @Column({ default: '' }) pjt_module_maxpotency22: string;
  @Column({ default: '' }) pjt_module_maxpotency23: string;
  @Column({ default: '' }) pjt_module_maxpotency24: string;
  @Column({ default: '' }) pjt_module_maxpotency25: string;
  @Column({ default: '' }) pjt_module_maxpotency26: string;
  @Column({ default: '' }) pjt_module_maxpotency27: string;
  @Column({ default: '' }) pjt_module_maxpotency28: string;
  @Column({ default: '' }) pjt_module_maxpotency29: string;
  @Column({ default: '' }) pjt_module_maxpotency30: string;
  @Column({ default: '' }) pjt_module_maxpotency31: string;
  @Column({ default: '' }) pjt_module_maxpotency32: string;
  @Column({ default: '' }) pjt_module_maxpotency33: string;
  @Column({ default: '' }) pjt_module_maxpotency34: string;
  @Column({ default: '' }) pjt_module_maxpotency35: string;
  @Column({ default: '' }) pjt_module_maxpotency36: string;
  @Column({ default: '' }) pjt_module_maxpotency37: string;
  @Column({ default: '' }) pjt_module_maxpotency38: string;
  @Column({ default: '' }) pjt_module_maxpotency39: string;
  @Column({ default: '' }) pjt_module_maxpotency40: string;
  @Column({ default: '' }) pjt_module_maxpotency41: string;
  @Column({ default: '' }) pjt_module_maxpotency42: string;
  @Column({ default: '' }) pjt_module_maxpotency43: string;
  @Column({ default: '' }) pjt_module_maxpotency44: string;
  @Column({ default: '' }) pjt_module_maxpotency45: string;
  @Column({ default: '' }) pjt_module_maxpotency46: string;
  @Column({ default: '' }) pjt_module_maxpotency47: string;
  @Column({ default: '' }) pjt_module_maxpotency48: string;
  @Column({ default: '' }) pjt_module_maxpotency49: string;
  @Column({ default: '' }) pjt_module_maxpotency50: string;
  @Column({ default: '' }) pjt_module_modules6: string;
  @Column({ default: '' }) pjt_module_modules7: string;
  @Column({ default: '' }) pjt_module_modules8: string;
  @Column({ default: '' }) pjt_module_modules9: string;
  @Column({ default: '' }) pjt_module_modules10: string;
  @Column({ default: '' }) pjt_module_modules11: string;
  @Column({ default: '' }) pjt_module_modules12: string;
  @Column({ default: '' }) pjt_module_modules13: string;
  @Column({ default: '' }) pjt_module_modules14: string;
  @Column({ default: '' }) pjt_module_modules15: string;
  @Column({ default: '' }) pjt_module_modules16: string;
  @Column({ default: '' }) pjt_module_modules17: string;
  @Column({ default: '' }) pjt_module_modules18: string;
  @Column({ default: '' }) pjt_module_modules19: string;
  @Column({ default: '' }) pjt_module_modules20: string;
  @Column({ default: '' }) pjt_module_modules21: string;
  @Column({ default: '' }) pjt_module_modules22: string;
  @Column({ default: '' }) pjt_module_modules23: string;
  @Column({ default: '' }) pjt_module_modules24: string;
  @Column({ default: '' }) pjt_module_modules25: string;
  @Column({ default: '' }) pjt_module_modules26: string;
  @Column({ default: '' }) pjt_module_modules27: string;
  @Column({ default: '' }) pjt_module_modules28: string;
  @Column({ default: '' }) pjt_module_modules29: string;
  @Column({ default: '' }) pjt_module_modules30: string;
  @Column({ default: '' }) pjt_module_modules31: string;
  @Column({ default: '' }) pjt_module_modules32: string;
  @Column({ default: '' }) pjt_module_modules33: string;
  @Column({ default: '' }) pjt_module_modules34: string;
  @Column({ default: '' }) pjt_module_modules35: string;
  @Column({ default: '' }) pjt_module_modules36: string;
  @Column({ default: '' }) pjt_module_modules37: string;
  @Column({ default: '' }) pjt_module_modules38: string;
  @Column({ default: '' }) pjt_module_modules39: string;
  @Column({ default: '' }) pjt_module_modules40: string;
  @Column({ default: '' }) pjt_module_modules41: string;
  @Column({ default: '' }) pjt_module_modules42: string;
  @Column({ default: '' }) pjt_module_modules43: string;
  @Column({ default: '' }) pjt_module_modules44: string;
  @Column({ default: '' }) pjt_module_modules45: string;
  @Column({ default: '' }) pjt_module_modules46: string;
  @Column({ default: '' }) pjt_module_modules47: string;
  @Column({ default: '' }) pjt_module_modules48: string;
  @Column({ default: '' }) pjt_module_modules49: string;
  @Column({ default: '' }) pjt_module_modules50: string;
  @Column({ default: '' }) pjt_module_obs6: string;
  @Column({ default: '' }) pjt_module_obs7: string;
  @Column({ default: '' }) pjt_module_obs8: string;
  @Column({ default: '' }) pjt_module_obs9: string;
  @Column({ default: '' }) pjt_module_obs10: string;
  @Column({ default: '' }) pjt_module_obs11: string;
  @Column({ default: '' }) pjt_module_obs12: string;
  @Column({ default: '' }) pjt_module_obs13: string;
  @Column({ default: '' }) pjt_module_obs14: string;
  @Column({ default: '' }) pjt_module_obs15: string;
  @Column({ default: '' }) pjt_module_obs16: string;
  @Column({ default: '' }) pjt_module_obs17: string;
  @Column({ default: '' }) pjt_module_obs18: string;
  @Column({ default: '' }) pjt_module_obs19: string;
  @Column({ default: '' }) pjt_module_obs20: string;
  @Column({ default: '' }) pjt_module_obs21: string;
  @Column({ default: '' }) pjt_module_obs22: string;
  @Column({ default: '' }) pjt_module_obs23: string;
  @Column({ default: '' }) pjt_module_obs24: string;
  @Column({ default: '' }) pjt_module_obs25: string;
  @Column({ default: '' }) pjt_module_obs26: string;
  @Column({ default: '' }) pjt_module_obs27: string;
  @Column({ default: '' }) pjt_module_obs28: string;
  @Column({ default: '' }) pjt_module_obs29: string;
  @Column({ default: '' }) pjt_module_obs30: string;
  @Column({ default: '' }) pjt_module_obs31: string;
  @Column({ default: '' }) pjt_module_obs32: string;
  @Column({ default: '' }) pjt_module_obs33: string;
  @Column({ default: '' }) pjt_module_obs34: string;
  @Column({ default: '' }) pjt_module_obs35: string;
  @Column({ default: '' }) pjt_module_obs36: string;
  @Column({ default: '' }) pjt_module_obs37: string;
  @Column({ default: '' }) pjt_module_obs38: string;
  @Column({ default: '' }) pjt_module_obs39: string;
  @Column({ default: '' }) pjt_module_obs40: string;
  @Column({ default: '' }) pjt_module_obs41: string;
  @Column({ default: '' }) pjt_module_obs42: string;
  @Column({ default: '' }) pjt_module_obs43: string;
  @Column({ default: '' }) pjt_module_obs44: string;
  @Column({ default: '' }) pjt_module_obs45: string;
  @Column({ default: '' }) pjt_module_obs46: string;
  @Column({ default: '' }) pjt_module_obs47: string;
  @Column({ default: '' }) pjt_module_obs48: string;
  @Column({ default: '' }) pjt_module_obs49: string;
  @Column({ default: '' }) pjt_module_obs50: string;
  @Column({ default: '' }) int_cpf_cnpj: string;
}
