import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from 'src/controllers/project.controller';
import { ProjectModel } from 'src/models/project.model';
@Module({
  imports: [TypeOrmModule.forFeature([ProjectModel])],
  controllers: [ProjectController],
})
export class ProjectModule {}
