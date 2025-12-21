import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service.js';

@Module({
  providers: [OrdersService],
})
export class OrdersModule {}
