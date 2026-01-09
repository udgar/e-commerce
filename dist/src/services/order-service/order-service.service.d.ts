import { CreateOrderDto } from 'src/modules/orders/dto/create-order.dto';
import { UpdateOrderDto } from 'src/modules/orders/dto/update-order.dto';
export declare class OrderServiceService {
    newOrder(dto: CreateOrderDto): void;
    updateOrder(dto: UpdateOrderDto): void;
    checkoutOrder(customer_id: string): void;
}
