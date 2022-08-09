import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusController } from 'src/controllers/status.controller';
import { StatusModel } from 'src/models/status.model';
@Module({
  imports: [TypeOrmModule.forFeature([StatusModel])],
  controllers: [StatusController],
})
export class StatusModule {}
