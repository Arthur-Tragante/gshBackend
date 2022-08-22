import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './modules/customer.module';
import { DealershipModule } from './modules/dealership.module';
import { IntegratorModule } from './modules/integrator.module';
import { ProjectModule } from './modules/project.module';
import { ProjectTypeModule } from './modules/projectType.module';
import { UserModule } from './modules/user.module';
import { StatusModule } from './modules/status.module';
import { UfModule } from './modules/uf.module';
import { EmailModule } from './modules/email.module';
import { AuthModule } from './auth/userAuth/auth.module';
import { AuthIntModule } from './auth/IntAuth/authInt.module';
import { AuthCustomerModule } from './auth/CustomerAuth/authCustomer.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
    }),
    UserModule,
    CustomerModule,
    DealershipModule,
    IntegratorModule,
    ProjectTypeModule,
    ProjectModule,
    StatusModule,
    UfModule,
    EmailModule,
    AuthModule,
    AuthIntModule,
    AuthCustomerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
