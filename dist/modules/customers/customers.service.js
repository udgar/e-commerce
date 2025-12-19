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
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
let CustomersService = class CustomersService {
    constructor(repository) { }
    create(createCustomerDto) {
        return 'This action adds a new customer';
    }
    findAll() {
        return `This action returns all customers`;
    }
    findOne(id) {
        return `This action returns a #${id} customer`;
    }
    update(id, updateCustomerDto) {
        return `This action updates a #${id} customer`;
    }
    remove(id) {
        return `This action removes a #${id} customer`;
    }
};
CustomersService = __decorate([
    Injectable(),
    __param(0, InjectRepository(Customer)),
    __metadata("design:paramtypes", [Repository])
], CustomersService);
export { CustomersService };
//# sourceMappingURL=customers.service.js.map