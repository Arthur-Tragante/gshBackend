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
import { ProjectTypeModel } from 'src/models/projectType.model';
import { ProjectTypeSchema } from 'src/schemas/projectType.schema';

@Controller('/projectType')
export class ProjectTypeController {
  constructor(
    @InjectRepository(ProjectTypeModel)
    private model: Repository<ProjectTypeModel>,
  ) {}

  @Post()
  public async create(
    @Body() body: ProjectTypeSchema,
  ): Promise<ProjectTypeModel> {
    return this.model.save(body);
  }

  @Get(':pjt_id')
  public async getOne(
    @Param('pjt_id', ParseIntPipe) pjt_id: number,
  ): Promise<ProjectTypeModel> {
    const Project = await this.model.findOne({ where: { pjt_id } });

    if (!Project) {
      throw new NotFoundException(
        `Não achei uma pessoa com o pjt_id ${pjt_id}`,
      );
    }

    return Project;
  }

  @Get()
  public async getAll(): Promise<ProjectTypeModel[]> {
    return this.model.find();
  }

  @Put(':pjt_id')
  public async update(
    @Param('pjt_id', ParseIntPipe) pjt_id: number,
    @Body() body: ProjectTypeSchema,
  ): Promise<ProjectTypeModel> {
    const ProjectType = await this.model.findOne({ where: { pjt_id } });

    if (!ProjectType) {
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
    const ProjectType = await this.model.findOne({ where: { pjt_id } });

    if (!ProjectType) {
      throw new NotFoundException(
        `Não achei uma pessoa com o pjt_id ${pjt_id}`,
      );
    }

    await this.model.delete(pjt_id);

    return `A pessoa com pjt_id ${pjt_id} foi deletada com sucesso`;
  }
}
