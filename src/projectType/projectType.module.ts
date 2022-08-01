import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectTypeController } from './controllers/projectType.controller';
import { ProjectTypeEntity } from './models/projectType.entity';
import { ProjectTypeService } from './services/projectType.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectTypeEntity])],
  providers: [ProjectTypeService],
  controllers: [ProjectTypeController],
})
export class ProjectTypeModule {}
