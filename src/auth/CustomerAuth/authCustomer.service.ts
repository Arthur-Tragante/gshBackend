import { Injectable } from '@nestjs/common';
import { CustomerService } from 'src/services/customer.service';

@Injectable()
export class AuthCustomer {
  constructor(private CustomerService: CustomerService) {}

  async validateCustomer(
    cli_cpf_cnpj: string,
    cli_password: string,
  ): Promise<any> {
    const customer = await this.CustomerService.findOne(cli_cpf_cnpj);
    if (customer && customer.cli_password === 'null') {
      const { cli_password, ...result } = customer;
      return result;
    }
    return null;
  }
}
