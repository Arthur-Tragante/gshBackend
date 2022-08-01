import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProjectTypeEntity } from '../models/projectType.entity';
import { ProjectType } from '../models/projectType.interface';

@Injectable()
export class ProjectTypeService {
  constructor(
    @InjectRepository(ProjectTypeEntity)
    private readonly projectTypeRepository: Repository<ProjectTypeEntity>,
  ) {}

  createProjectType(ProjectTypePost: ProjectType): Observable<ProjectType> {
    return from(this.projectTypeRepository.save(ProjectTypePost));
  }

  findAllProjectTypes(): Observable<ProjectType[]> {
    return from(this.projectTypeRepository.find());
  }

  updateProjectType(
    id: number,
    projectType: ProjectType,
  ): Observable<UpdateResult> {
    return from(this.projectTypeRepository.update(id, projectType));
  }

  deleteProjectType(id: number): Observable<DeleteResult> {
    return from(this.projectTypeRepository.delete(id));
  }
}
