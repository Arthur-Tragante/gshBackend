import { Injectable } from '@nestjs/common';
import { IntegratorService } from 'src/services/integrator.service';

@Injectable()
export class AuthInt {
  constructor(private IntegratorService: IntegratorService) {}

  async validateIntegrator(
    int_cpf_cnpj: string,
    int_password: string,
  ): Promise<any> {
    const integrator = await this.IntegratorService.findOne(int_cpf_cnpj);
    if (integrator && integrator.int_password === int_password) {
      const { int_password, ...result } = integrator;

      return result;
    }
    return null;
  }
}
