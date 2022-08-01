import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { IntegratorEntity } from '../models/Integrator.entity';
import { Integrator } from '../models/Integrator.interface';

@Injectable()
export class IntegratorService {
  constructor(
    @InjectRepository(IntegratorEntity)
    private readonly integratorRepository: Repository<IntegratorEntity>,
  ) {}

  createIntegrator(integratorPost: Integrator): Observable<Integrator> {
    return from(this.integratorRepository.save(integratorPost));
  }

  findAllIntegrators(): Observable<Integrator[]> {
    return from(this.integratorRepository.find());
  }

  updateIntegrator(
    id: number,
    integrator: Integrator,
  ): Observable<UpdateResult> {
    return from(this.integratorRepository.update(id, integrator));
  }

  deleteIntegrator(id: number): Observable<DeleteResult> {
    return from(this.integratorRepository.delete(id));
  }
}
