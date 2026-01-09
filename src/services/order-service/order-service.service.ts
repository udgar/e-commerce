import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from 'src/modules/orders/dto/create-order.dto';
import { UpdateOrderDto } from 'src/modules/orders/dto/update-order.dto';

@Injectable()
export class OrderServiceService {

    newOrder(dto:CreateOrderDto){
        // Here we need to create order of the customer when customer adds the product

    }

    updateOrder(dto:UpdateOrderDto){
        // Here we need to update the total amount and status of the order
    }

    checkoutOrder(customer_id:string){
        // Here we need to Finish that customer order
    }
}
