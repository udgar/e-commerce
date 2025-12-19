import { Module } from '@nestjs/common';
import { OrderServiceService } from './order-service.service';

@Module({
  providers: [OrderServiceService]
})
export class OrderServiceModule {}
