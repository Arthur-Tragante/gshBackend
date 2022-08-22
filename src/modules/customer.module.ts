import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerController } from 'src/controllers/customer.controller';
import { CustomerModel } from 'src/models/customer.model';
import { CustomerService } from 'src/services/customer.service';
@Module({
  imports: [TypeOrmModule.forFeature([CustomerModel])],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
