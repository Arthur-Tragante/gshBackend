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
  Request,
  UseGuards,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerModel } from 'src/models/customer.model';
import { CustomerSchema } from 'src/schemas/customer.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('/customer')
export class CustomerController {
  constructor(
    @InjectRepository(CustomerModel) private model: Repository<CustomerModel>,
  ) {}

  @Post()
  public async create(@Body() body: CustomerSchema): Promise<CustomerModel> {
    return this.model.save(body);
  }

  @Get(':cli_id')
  public async getOne(
    @Param('cli_id', ParseIntPipe) cli_id: number,
  ): Promise<CustomerModel> {
    const customer = await this.model.findOne({ where: { cli_id } });

    if (!customer) {
      throw new NotFoundException(
        `Não achei uma pessoa com o cli_id ${cli_id}`,
      );
    }

    return customer;
  }

  // @Get(':cli_cpf_cnpj')
  // public async getOneDoc(
  //   @Param('cli_cpf_cnpj', ParseIntPipe) cli_cpf_cnpj: number,
  // ): Promise<CustomerModel> {
  //   const customer = await this.model.findOne({ where: { cli_cpf_cnpj } });

  //   if (!customer) {
  //     throw new NotFoundException(
  //       `Não achei uma pessoa com o cli_cpf_cnpj ${cli_cpf_cnpj}`,
  //     );
  //   }

  //   return customer;
  // }

  @Get()
  public async getAll(): Promise<CustomerModel[]> {
    return this.model.find();
  }

  @Put(':cli_id')
  public async update(
    @Param('cli_id', ParseIntPipe) cli_id: number,
    @Body() body: CustomerSchema,
  ): Promise<CustomerModel> {
    const customer = await this.model.findOne({ where: { cli_id } });

    if (!customer) {
      throw new NotFoundException(
        `Não achei uma pessoa com o cli_id ${cli_id}`,
      );
    }

    await this.model.update({ cli_id }, body);

    return this.model.findOne({ where: { cli_id } });
  }

  @Delete(':cli_id')
  public async delete(
    @Param('cli_id', ParseIntPipe) cli_id: number,
  ): Promise<string> {
    const customer = await this.model.findOne({ where: { cli_id } });

    if (!customer) {
      throw new NotFoundException(
        `Não achei uma pessoa com o cli_id ${cli_id}`,
      );
    }

    await this.model.delete(cli_id);

    return `A pessoa com cli_id ${cli_id} foi deletada com sucesso`;
  }
  @UseGuards(AuthGuard('Cli'))
  @Post('/login')
  async login(@Request() req) {
    return req.user;
  }
}
