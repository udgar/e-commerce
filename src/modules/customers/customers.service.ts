import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto.js';
import { UpdateCustomerDto } from './dto/update-customer.dto.js';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity.js';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CustomersService {

  constructor(@InjectRepository(Customer)private readonly customerRepository:Repository<Customer>){}
  async create(createCustomerDto: CreateCustomerDto):Promise<Customer> {
    return this.customerRepository.create(createCustomerDto)
  }

  async findAll() :Promise<Customer[]>{
    return this.customerRepository.find();
  }

  async findOne(id: number) :Promise<Customer | null>{
    return this.customerRepository.findOneBy({
      id: id
    })
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customerRepository.update({
      id: id
    }, updateCustomerDto);
  }

  remove(id: number) {
    return this.customerRepository.delete({
      id: id
    })
  }
}
