import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntegratorController } from 'src/controllers/integrator.controller';
import { IntegratorModel } from 'src/models/integrator.model';
@Module({
  imports: [TypeOrmModule.forFeature([IntegratorModel])],
  controllers: [IntegratorController],
})
export class IntegratorModule {}
