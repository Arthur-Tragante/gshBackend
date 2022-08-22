import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthCustomer } from './authCustomer.service';

@Injectable()
export class CliStrategy extends PassportStrategy(Strategy, 'Cli') {
  constructor(private AuthCustomer: AuthCustomer) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const customer = await this.AuthCustomer.validateCustomer(
      username,
      password,
    );
    if (!customer) {
      throw new UnauthorizedException();
    }
    return customer;
  }
}
