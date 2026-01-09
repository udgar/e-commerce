import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity.js';

@Module({
  providers: [OrdersService],
  imports: [TypeOrmModule.forFeature([Order])]
})
export class OrdersModule {}
