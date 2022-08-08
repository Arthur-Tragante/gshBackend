import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IntegratorModel } from 'src/models/Integrator.model';
import { IntegratorSchema } from 'src/schemas/Integrator.schema';

@Controller('/integrator')
export class IntegratorController {
  constructor(
    @InjectRepository(IntegratorModel)
    private model: Repository<IntegratorModel>,
  ) {}

  @Post()
  public async create(
    @Body() body: IntegratorSchema,
  ): Promise<IntegratorModel> {
    return this.model.save(body);
  }

  @Get(':int_cpf_cnpj')
  public async getOneDoc(
    @Param('int_cpf_cnpj', ParseIntPipe) int_cpf_cnpj: number,
  ): Promise<IntegratorModel> {
    const Integrator = await this.model.findOne({ where: { int_cpf_cnpj } });

    if (!Integrator) {
      throw new NotFoundException(
        `Não achei uma pessoa com o int_cpf_cnpj ${int_cpf_cnpj}`,
      );
    }

    return Integrator;
  }

  @Get()
  public async getAll(): Promise<IntegratorModel[]> {
    return this.model.find();
  }

  @Put(':int_id')
  public async update(
    @Param('int_id', ParseIntPipe) int_id: number,
    @Body() body: IntegratorSchema,
  ): Promise<IntegratorModel> {
    const Integrator = await this.model.findOne({ where: { int_id } });

    if (!Integrator) {
      throw new NotFoundException(
        `Não achei uma pessoa com o int_id ${int_id}`,
      );
    }

    await this.model.update({ int_id }, body);

    return this.model.findOne({ where: { int_id } });
  }

  @Delete(':int_id')
  public async delete(
    @Param('int_id', ParseIntPipe) int_id: number,
  ): Promise<string> {
    const Integrator = await this.model.findOne({ where: { int_id } });

    if (!Integrator) {
      throw new NotFoundException(
        `Não achei uma pessoa com o int_id ${int_id}`,
      );
    }

    await this.model.delete(int_id);

    return `A pessoa com int_id ${int_id} foi deletada com sucesso`;
  }
}
