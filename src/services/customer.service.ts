import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerModel } from 'src/models/customer.model';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerModel)
    private CustomerModel: Repository<CustomerModel>,
  ) {}
  getAll() {
    return this.CustomerModel.find();
  }
  async findOne(cli_cpf_cnpj: string): Promise<CustomerModel | undefined> {
    const customer = await this.CustomerModel.findOne({
      where: { cli_cpf_cnpj },
    });

    if (!customer) {
      throw new NotFoundException(
        `Não foi encontrado um cliente com o documento: ${cli_cpf_cnpj}`,
      );
    }
    return this.CustomerModel.findOne({ where: { cli_cpf_cnpj } });
  }
}
