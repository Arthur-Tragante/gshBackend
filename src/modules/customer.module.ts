import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from 'src/controllers/customer.controller';
import { CustomerModel } from 'src/models/customer.model';
@Module({
  imports: [TypeOrmModule.forFeature([CustomerModel])],
  controllers: [CustomerController],
})
export class CustomerModule {}
