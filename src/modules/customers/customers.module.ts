import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service.js';
import { Customer } from './entities/customer.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [CustomersService],
  imports: [TypeOrmModule.forFeature([Customer])]
})
export class CustomersModule {}
