import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { UpdateResult } from 'typeorm/browser';
import { DeleteResult } from 'typeorm/browser';

@Injectable()
export class ProductsService {
  
  constructor(@InjectRepository(Product)private readonly repository:Repository<Product>){

  }

  async create(createProductDto: CreateProductDto):Promise<Product> {
    return this.repository.create(createProductDto);
  }

  async findAll():Promise<Product[]> {
    return this.repository.find();
  }

  async findOne(id: string):Promise<Product | null> {
    return this.repository.findOneBy({id:parseInt(id)});
  }

  async update(id: string, updateProductDto: UpdateProductDto):Promise<UpdateResult> {
    return this.repository.update(id,updateProductDto);
  }

  async remove(id: string):Promise<DeleteResult> {
    return this.repository.delete({id:parseInt(id)});
  }
}
