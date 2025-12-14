import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Repository } from 'typeorm';
import { Customer } from './entities/customer.entity';
export declare class CustomersService {
    constructor(repository: Repository<Customer>);
    create(createCustomerDto: CreateCustomerDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCustomerDto: UpdateCustomerDto): string;
    remove(id: number): string;
}
