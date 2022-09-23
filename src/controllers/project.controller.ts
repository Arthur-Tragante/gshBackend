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
import { ProjectModel } from 'src/models/project.model';
import { ProjectSchema } from 'src/schemas/project.schema';

@Controller('/project')
export class ProjectController {
  constructor(
    @InjectRepository(ProjectModel)
    private model: Repository<ProjectModel>,
  ) {}

  @Post()
  public async create(@Body() body: ProjectSchema): Promise<ProjectModel> {
    return this.model.save(body);
  }

  @Get(':pjt_id')
  public async getOne(
    @Param('pjt_id', ParseIntPipe) pjt_id: number,
  ): Promise<ProjectModel> {
    const Project = await this.model.findOne({ where: { pjt_id } });

    return Project;
  }

  @Get('/doc/:cli_cpf_cnpj')
  public async getOneDoc(
    @Param('cli_cpf_cnpj', ParseIntPipe) cli_cpf_cnpj: string,
  ): Promise<ProjectModel[]> {
    const Project = await this.model.find({ where: { cli_cpf_cnpj } });

    if (!Project) {
      throw new NotFoundException(
        `Não achei uma pessoa com o cli_cpf_cnpj ${cli_cpf_cnpj}`,
      );
    }

    return Project;
  }

  @Get()
  public async getAll(): Promise<ProjectModel[]> {
    return this.model.find();
  }

  @Put(':pjt_id')
  public async update(
    @Param('pjt_id', ParseIntPipe) pjt_id: number,
    @Body() body: ProjectSchema,
  ): Promise<ProjectModel> {
    const Project = await this.model.findOne({ where: { pjt_id } });

    if (!Project) {
      throw new NotFoundException(
        `Não achei uma pessoa com o pjt_id ${pjt_id}`,
      );
    }

    await this.model.update({ pjt_id }, body);

    return this.model.findOne({ where: { pjt_id } });
  }

  @Delete(':pjt_id')
  public async delete(
    @Param('pjt_id', ParseIntPipe) pjt_id: number,
  ): Promise<string> {
    const Project = await this.model.findOne({ where: { pjt_id } });

    if (!Project) {
      throw new NotFoundException(
        `Não achei uma pessoa com o pjt_id ${pjt_id}`,
      );
    }

    await this.model.delete(pjt_id);

    return `A pessoa com pjt_id ${pjt_id} foi deletada com sucesso`;
  }
}
