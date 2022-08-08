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

  @Get(':prj_id')
  public async getOne(
    @Param('prj_id', ParseIntPipe) prj_id: number,
  ): Promise<ProjectModel> {
    const Project = await this.model.findOne({ where: { prj_id } });

    if (!Project) {
      throw new NotFoundException(
        `Não achei uma pessoa com o prj_id ${prj_id}`,
      );
    }

    return Project;
  }

  @Get()
  public async getAll(): Promise<ProjectModel[]> {
    return this.model.find();
  }

  @Put(':prj_id')
  public async update(
    @Param('prj_id', ParseIntPipe) prj_id: number,
    @Body() body: ProjectSchema,
  ): Promise<ProjectModel> {
    const Project = await this.model.findOne({ where: { prj_id } });

    if (!Project) {
      throw new NotFoundException(
        `Não achei uma pessoa com o prj_id ${prj_id}`,
      );
    }

    await this.model.update({ prj_id }, body);

    return this.model.findOne({ where: { prj_id } });
  }

  @Delete(':prj_id')
  public async delete(
    @Param('prj_id', ParseIntPipe) prj_id: number,
  ): Promise<string> {
    const Project = await this.model.findOne({ where: { prj_id } });

    if (!Project) {
      throw new NotFoundException(
        `Não achei uma pessoa com o prj_id ${prj_id}`,
      );
    }

    await this.model.delete(prj_id);

    return `A pessoa com prj_id ${prj_id} foi deletada com sucesso`;
  }
}
