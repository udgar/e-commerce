import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity.js';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';
import { DeleteResult } from 'typeorm/browser';
export declare class OrdersService {
    private readonly orderRepo;
    constructor(orderRepo: Repository<Order>);
    create(createOrderDto: CreateOrderDto): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order | null>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<UpdateResult>;
    remove(id: number): Promise<DeleteResult>;
}
