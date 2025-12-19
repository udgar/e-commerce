import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './modules/products/products.module.js';
import { CustomersModule } from './modules/customers/customers.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from '../data-source.js';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './modules/orders/orders.module';
import { OrderServiceModule } from './services/order-service/order-service.module';
import { PaymentServiceModule } from './services/payment-service/payment-service.module';

@Module({
  imports: [ProductsModule, CustomersModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot(AppDataSource.options),
    OrdersModule,
    OrderServiceModule,
    PaymentServiceModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
