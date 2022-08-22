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
import { UserModel } from 'src/models/user.model';
import { UserSchema } from 'src/schemas/user.schema';
import { UserService } from 'src/services/user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/user')
export class UserController {
  constructor(
    @InjectRepository(UserModel) private model: Repository<UserModel>,
    private userService: UserService,
  ) {}

  @Post()
  public async create(@Body() body: UserSchema): Promise<UserModel> {
    return this.model.save(body);
  }

  @Get(':usr_id')
  public async getOne(
    @Param('usr_id', ParseIntPipe) usr_id: number,
  ): Promise<UserModel> {
    const user = await this.model.findOne({ where: { usr_id } });

    if (!user) {
      throw new NotFoundException(
        `Não achei uma pessoa com o usr_id ${usr_id}`,
      );
    }

    return user;
  }

  @Get('/doc/:usr_cpf_cnpj')
  public async getOneDoc(
    @Param('usr_cpf_cnpj', ParseIntPipe) usr_cpf_cnpj: string,
  ): Promise<UserModel> {
    return this.userService.findOne(usr_cpf_cnpj);
  }

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Put(':usr_id')
  public async update(
    @Param('usr_id', ParseIntPipe) usr_id: number,
    @Body() body: UserSchema,
  ): Promise<UserModel> {
    const user = await this.model.findOne({ where: { usr_id } });

    if (!user) {
      throw new NotFoundException(
        `Não achei uma pessoa com o usr_id ${usr_id}`,
      );
    }

    await this.model.update({ usr_id }, body);

    return this.model.findOne({ where: { usr_id } });
  }

  @Delete(':usr_id')
  public async delete(
    @Param('usr_id', ParseIntPipe) usr_id: number,
  ): Promise<string> {
    const user = await this.model.findOne({ where: { usr_id } });

    if (!user) {
      throw new NotFoundException(
        `Não achei uma pessoa com o usr_id ${usr_id}`,
      );
    }

    await this.model.delete(usr_id);

    return `A pessoa com usr_id ${usr_id} foi deletada com sucesso`;
  }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() req) {
    return req.user;
  }
}
