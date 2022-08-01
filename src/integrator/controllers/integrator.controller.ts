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
import { Integrator } from '../models/integrator.interface';
import { DeleteResult, UpdateResult } from 'typeorm';
import { IntegratorService } from '../services/integrator.service';

@Controller('integrator')
export class IntegratorController {
  constructor(private IntegratorService: IntegratorService) {}

  @Post()
  create(@Body() Integrator: Integrator): Observable<Integrator> {
    return this.IntegratorService.createIntegrator(Integrator);
  }

  @Get()
  findAll(): Observable<Integrator[]> {
    return this.IntegratorService.findAllIntegrators();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() IntegratorPost: Integrator,
  ): Observable<UpdateResult> {
    return this.IntegratorService.updateIntegrator(id, IntegratorPost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.IntegratorService.deleteIntegrator(id);
  }
}
