import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IntegratorModel } from 'src/models/integrator.model';
import { Repository } from 'typeorm';

@Injectable()
export class IntegratorService {
  constructor(
    @InjectRepository(IntegratorModel)
    private integratorModel: Repository<IntegratorModel>,
  ) {}
  getAll() {
    return this.integratorModel.find();
  }
  async findOne(int_cpf_cnpj: string): Promise<IntegratorModel | undefined> {
    const integrator = await this.integratorModel.findOne({
      where: { int_cpf_cnpj },
    });

    if (!integrator) {
      throw new NotFoundException(
        `Não foi encontrado um usuário com o documento: ${int_cpf_cnpj}`,
      );
    }
    return this.integratorModel.findOne({ where: { int_cpf_cnpj } });
  }
}
