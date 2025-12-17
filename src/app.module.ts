import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { CustomersModule } from './modules/customers/customers.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './modules/database/data-source';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProductsModule, CustomersModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot(AppDataSource.options)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
