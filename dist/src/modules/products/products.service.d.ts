import { Repository } from 'typeorm';
import { Product } from './entities/product.entity.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { UpdateResult } from 'typeorm/browser';
import { DeleteResult } from 'typeorm/browser';
export declare class ProductsService {
    private readonly repository;
    constructor(repository: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product | null>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<UpdateResult>;
    remove(id: string): Promise<DeleteResult>;
}
