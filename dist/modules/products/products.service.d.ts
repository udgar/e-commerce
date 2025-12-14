import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
export declare class ProductsService {
    private repository;
    constructor(repository: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product[]>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
