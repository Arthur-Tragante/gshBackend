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
import { StatusModel } from 'src/models/status.model';
import { StatusSchema } from 'src/schemas/status.schema';

@Controller('/status')
export class StatusController {
  constructor(
    @InjectRepository(StatusModel) private model: Repository<StatusModel>,
  ) {}

  @Post()
  public async create(@Body() body: StatusSchema): Promise<StatusModel> {
    return this.model.save(body);
  }

  @Get(':sts_id')
  public async getOne(
    @Param('sts_id', ParseIntPipe) sts_id: number,
  ): Promise<StatusModel> {
    const Status = await this.model.findOne({ where: { sts_id } });

    if (!Status) {
      throw new NotFoundException(
        `Não achei uma pessoa com o sts_id ${sts_id}`,
      );
    }

    return Status;
  }


  @Get()
  public async getAll(): Promise<StatusModel[]> {
    return this.model.find();
  }

  @Put(':sts_id')
  public async update(
    @Param('sts_id', ParseIntPipe) sts_id: number,
    @Body() body: StatusSchema,
  ): Promise<StatusModel> {
    const Status = await this.model.findOne({ where: { sts_id } });

    if (!Status) {
      throw new NotFoundException(
        `Não achei uma pessoa com o sts_id ${sts_id}`,
      );
    }

    await this.model.update({ sts_id }, body);

    return this.model.findOne({ where: { sts_id } });
  }

  @Delete(':sts_id')
  public async delete(
    @Param('sts_id', ParseIntPipe) sts_id: number,
  ): Promise<string> {
    const Status = await this.model.findOne({ where: { sts_id } });

    if (!Status) {
      throw new NotFoundException(
        `Não achei uma pessoa com o sts_id ${sts_id}`,
      );
    }

    await this.model.delete(sts_id);

    return `A pessoa com sts_id ${sts_id} foi deletada com sucesso`;
  }
}
