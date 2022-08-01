import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { DealershipEntity } from '../models/dealership.entity';
import { Dealership } from '../models/dealership.interface';

@Injectable()
export class DealershipService {
  constructor(
    @InjectRepository(DealershipEntity)
    private readonly dealershipRepository: Repository<DealershipEntity>,
  ) {}

  createDealership(dealershipPost: Dealership): Observable<Dealership> {
    return from(this.dealershipRepository.save(dealershipPost));
  }

  findAllDealerships(): Observable<Dealership[]> {
    return from(this.dealershipRepository.find());
  }

  updateDealership(
    id: number,
    dealership: Dealership,
  ): Observable<UpdateResult> {
    return from(this.dealershipRepository.update(id, dealership));
  }

  deleteDealership(id: number): Observable<DeleteResult> {
    return from(this.dealershipRepository.delete(id));
  }
}
