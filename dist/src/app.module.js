var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './modules/products/products.module.js';
import { CustomersModule } from './modules/customers/customers.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from '../data-source.js';
import { ConfigModule } from '@nestjs/config';
import { OrdersModule } from './modules/orders/orders.module.js';
import { OrderServiceModule } from './services/order-service/order-service.module.js';
import { PaymentServiceModule } from './services/payment-service/payment-service.module.js';
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [ProductsModule, CustomersModule,
            ConfigModule.forRoot({ isGlobal: true }),
            TypeOrmModule.forRoot(AppDataSource.options),
            OrdersModule,
            OrderServiceModule,
            PaymentServiceModule
        ],
        controllers: [AppController],
        providers: [AppService],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map