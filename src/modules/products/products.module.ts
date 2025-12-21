import { Module } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity.js';

@Module({
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([Product])]
})
export class ProductsModule {}
