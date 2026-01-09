import { Module } from '@nestjs/common';
import { OrderServiceService } from './order-service.service.js';

@Module({
  providers: [OrderServiceService]
})
export class OrderServiceModule {}
