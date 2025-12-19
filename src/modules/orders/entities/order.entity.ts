import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders_info')
export class Order {

    @PrimaryGeneratedColumn()
    id:number

    @Column('uuid')
    @Column({name: 'order_id'})
    orderId:string

    @Column({name:'total_amount'})
    totalAmount:number

    @Column({name: 'customer_id'})
    customerId:string

    @Column({name:'status'})
    status:string
}
