import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DealershipController } from './controllers/dealership.controller';
import { DealershipEntity } from './models/dealership.entity';
import { DealershipService } from './services/dealership.service';

@Module({
  imports: [TypeOrmModule.forFeature([DealershipEntity])],
  providers: [DealershipService],
  controllers: [DealershipController],
})
export class DealershipModule {}
