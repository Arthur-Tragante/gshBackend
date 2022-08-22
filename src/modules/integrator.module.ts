import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntegratorController } from 'src/controllers/integrator.controller';
import { IntegratorModel } from 'src/models/integrator.model';
import { IntegratorService } from 'src/services/integrator.service';
@Module({
  imports: [TypeOrmModule.forFeature([IntegratorModel])],
  controllers: [IntegratorController],
  providers: [IntegratorService],
  exports: [IntegratorService],
})
export class IntegratorModule {}
