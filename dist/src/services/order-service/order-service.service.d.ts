import { CreateOrderDto } from 'src/modules/orders/dto/create-order.dto.js';
import { UpdateOrderDto } from 'src/modules/orders/dto/update-order.dto.js';
export declare class OrderServiceService {
    newOrder(dto: CreateOrderDto): void;
    updateOrder(dto: UpdateOrderDto): void;
    checkoutOrder(customer_id: string): void;
}
