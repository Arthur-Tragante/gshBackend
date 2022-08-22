import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { IntegratorModule } from 'src/modules/integrator.module';
import { AuthInt } from './authIntegrator.service';
import { IntStrategy } from './local.strategy';
@Module({
  imports: [IntegratorModule, PassportModule],
  providers: [AuthInt, IntStrategy],
})
export class AuthIntModule {}
