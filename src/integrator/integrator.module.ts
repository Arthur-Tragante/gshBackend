import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IntegratorController } from './controllers/integrator.controller';
import { IntegratorEntity } from './models/integrator.entity';
import { IntegratorService } from './services/integrator.service';

@Module({
  imports: [TypeOrmModule.forFeature([IntegratorEntity])],
  providers: [IntegratorService],
  controllers: [IntegratorController],
})
export class IntegratorModule {}
