import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectTypeController } from 'src/controllers/projectType.controller';
import { ProjectTypeModel } from 'src/models/projectType.model';
@Module({
  imports: [TypeOrmModule.forFeature([ProjectTypeModel])],
  controllers: [ProjectTypeController],
})
export class ProjectTypeModule {}
