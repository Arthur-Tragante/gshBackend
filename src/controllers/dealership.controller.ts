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
import { DealershipModel } from 'src/models/dealership.model';
import { DealershipSchema } from 'src/schemas/dealership.schema';

@Controller('/dealership')
export class DealershipController {
  constructor(
    @InjectRepository(DealershipModel)
    private model: Repository<DealershipModel>,
  ) {}

  @Post()
  public async create(
    @Body() body: DealershipSchema,
  ): Promise<DealershipModel> {
    return this.model.save(body);
  }

  @Get(':dls_id')
  public async getOneDoc(
    @Param('dls_id', ParseIntPipe) dls_id: number,
  ): Promise<DealershipModel> {
    const Dealership = await this.model.findOne({ where: { dls_id } });

    if (!Dealership) {
      throw new NotFoundException(
        `Não achei uma pessoa com o dls_id ${dls_id}`,
      );
    }

    return Dealership;
  }

  @Get()
  public async getAll(): Promise<DealershipModel[]> {
    return this.model.find();
  }

  @Put(':dls_id')
  public async update(
    @Param('dls_id', ParseIntPipe) dls_id: number,
    @Body() body: DealershipSchema,
  ): Promise<DealershipModel> {
    const Dealership = await this.model.findOne({ where: { dls_id } });

    if (!Dealership) {
      throw new NotFoundException(
        `Não achei uma pessoa com o dls_id ${dls_id}`,
      );
    }

    await this.model.update({ dls_id }, body);

    return this.model.findOne({ where: { dls_id } });
  }

  @Delete(':dls_id')
  public async delete(
    @Param('dls_id', ParseIntPipe) dls_id: number,
  ): Promise<string> {
    const Dealership = await this.model.findOne({ where: { dls_id } });

    if (!Dealership) {
      throw new NotFoundException(
        `Não achei uma pessoa com o dls_id ${dls_id}`,
      );
    }

    await this.model.delete(dls_id);

    return `A pessoa com dls_id ${dls_id} foi deletada com sucesso`;
  }
}
