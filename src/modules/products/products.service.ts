import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(@InjectRepository(Product)private repository:Repository<Product>){}
  create(createProductDto: CreateProductDto) {
    return this.repository.insert(createProductDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findBy({id:parseInt(id)});
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.repository.update(id,updateProductDto);
  }

  remove(id: string) {
    return this.repository.delete({id:parseInt(id)});
  }
}
