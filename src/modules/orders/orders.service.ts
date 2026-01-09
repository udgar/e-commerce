import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity.js';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm/browser';
import { DeleteResult } from 'typeorm/browser';

@Injectable()
export class OrdersService {

  constructor(@InjectRepository(Order)private readonly orderRepo:Repository<Order>){}

  async create(createOrderDto: CreateOrderDto):Promise<Order> {
    return this.orderRepo.create(createOrderDto);
  }

  async findAll() :Promise<Order[]>{
    return this.orderRepo.find();
  }

  async findOne(id: number):Promise<Order | null> {
    return this.orderRepo.findOneBy({
      id:id
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto):Promise<UpdateResult> {
    return this.orderRepo.update({
      id:id
    },updateOrderDto)
  }

  async remove(id: number):Promise<DeleteResult> {
    return this.orderRepo.delete({
      id:id
    })
  }
}
