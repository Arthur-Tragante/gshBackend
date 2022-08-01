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
import { Dealership } from '../models/dealership.interface';
import { DeleteResult, UpdateResult } from 'typeorm';
import { DealershipService } from '../services/dealership.service';

@Controller('dealership')
export class DealershipController {
  constructor(private dealershipService: DealershipService) {}

  @Post()
  create(@Body() Dealership: Dealership): Observable<Dealership> {
    return this.dealershipService.createDealership(Dealership);
  }

  @Get()
  findAll(): Observable<Dealership[]> {
    return this.dealershipService.findAllDealerships();
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() DealershipPost: Dealership,
  ): Observable<UpdateResult> {
    return this.dealershipService.updateDealership(id, DealershipPost);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<DeleteResult> {
    return this.dealershipService.deleteDealership(id);
  }
}
