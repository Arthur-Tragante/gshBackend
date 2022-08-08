import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealershipController } from 'src/controllers/dealership.controller';
import { DealershipModel } from 'src/models/dealership.model';
@Module({
  imports: [TypeOrmModule.forFeature([DealershipModel])],
  controllers: [DealershipController],
})
export class DealershipModule {}
