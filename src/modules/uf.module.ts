import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UfController } from 'src/controllers/uf.controller';
import { UfModel } from 'src/models/uf.model';
@Module({
  imports: [TypeOrmModule.forFeature([UfModel])],
  controllers: [UfController],
})
export class UfModule {}
