import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products_info")
export class Product {

    @PrimaryGeneratedColumn()
    id:number

    @Column({name:'product_id'})
    @Column('uuid')
    productId:string

    @Column({name: 'product_name'})
    productName:string

    @Column({name:'price'})
    price:number

    @Column({name: 'category'})
    category:string
}
