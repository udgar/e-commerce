var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity.js';
let ProductsService = class ProductsService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    create(createProductDto) {
        return this.repository.insert(createProductDto);
    }
    findAll() {
        return this.repository.find();
    }
    findOne(id) {
        return this.repository.findBy({ id: parseInt(id) });
    }
    update(id, updateProductDto) {
        return this.repository.update(id, updateProductDto);
    }
    remove(id) {
        return this.repository.delete({ id: parseInt(id) });
    }
};
ProductsService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Product)),
    __metadata("design:paramtypes", [Repository])
], ProductsService);
export { ProductsService };
//# sourceMappingURL=products.service.js.map