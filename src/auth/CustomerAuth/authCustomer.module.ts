import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { CustomerModule } from 'src/modules/customer.module';
import { AuthCustomer } from './authCustomer.service';
import { CliStrategy } from './local.strategy';
@Module({
  imports: [CustomerModule, PassportModule],
  providers: [AuthCustomer, CliStrategy],
})
export class AuthCustomerModule {}
