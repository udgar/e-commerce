import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './modules/products/products.module.js';
import { CustomersModule } from './modules/customers/customers.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from '../data-source.js';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [ProductsModule, CustomersModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot(AppDataSource.options),
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
