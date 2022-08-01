import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ProjectType } from '../models/projectType.interface';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ProjectTypeService } from '../services/projectType.service';

@Controller('projectType')
export class ProjectTypeController {
  constructor(private projectTypeService: ProjectTypeService) {}

  @Post()
  create(@Body() ProjectType: ProjectType): Observable<ProjectType> {
    return this.projectTypeService.createProjectType(ProjectType);
  }

  @Get()
  findAll(): Observable<ProjectType[]> {
    return this.projectTypeService.findAllProjectTypes();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() ProjectTypePost: ProjectType,
  ): Observable<UpdateResult> {
    return this.projectTypeService.updateProjectType(id, ProjectTypePost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.projectTypeService.deleteProjectType(id);
  }
}
