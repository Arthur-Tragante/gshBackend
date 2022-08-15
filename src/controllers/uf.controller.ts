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
import { UfModel } from 'src/models/uf.model';
import { UfSchema } from 'src/schemas/uf.schema';

@Controller('/uf')
export class UfController {
  constructor(@InjectRepository(UfModel) private model: Repository<UfModel>) {}

  @Post()
  public async create(@Body() body: UfSchema): Promise<UfModel> {
    return this.model.save(body);
  }

  @Get(':uf_id')
  public async getOne(
    @Param('uf_id', ParseIntPipe) uf_id: number,
  ): Promise<UfModel> {
    const Uf = await this.model.findOne({ where: { uf_id } });

    if (!Uf) {
      throw new NotFoundException(`Não achei uma pessoa com o uf_id ${uf_id}`);
    }

    return Uf;
  }

  @Get()
  public async getAll(): Promise<UfModel[]> {
    return this.model.find();
  }

  @Put(':uf_id')
  public async update(
    @Param('uf_id', ParseIntPipe) uf_id: number,
    @Body() body: UfSchema,
  ): Promise<UfModel> {
    const Uf = await this.model.findOne({ where: { uf_id } });

    if (!Uf) {
      throw new NotFoundException(`Não achei uma pessoa com o uf_id ${uf_id}`);
    }

    await this.model.update({ uf_id }, body);

    return this.model.findOne({ where: { uf_id } });
  }

  @Delete(':uf_id')
  public async delete(
    @Param('uf_id', ParseIntPipe) uf_id: number,
  ): Promise<string> {
    const Uf = await this.model.findOne({ where: { uf_id } });

    if (!Uf) {
      throw new NotFoundException(`Não achei uma pessoa com o uf_id ${uf_id}`);
    }

    await this.model.delete(uf_id);

    return `A pessoa com uf_id ${uf_id} foi deletada com sucesso`;
  }
}
