import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthInt } from './authIntegrator.service';

@Injectable()
export class IntStrategy extends PassportStrategy(Strategy, 'int') {
  constructor(private authInt: AuthInt) {
    super();
  }

  async validate(intname: string, intpassword: string): Promise<any> {
    const integrator = await this.authInt.validateIntegrator(
      intname,
      intpassword,
    );
    if (!integrator) {
      throw new UnauthorizedException();
    }
    return integrator;
  }
}
