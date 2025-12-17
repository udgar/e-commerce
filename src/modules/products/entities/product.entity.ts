import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products_info")
export class Product {

    @PrimaryGeneratedColumn()
    id:number

    @Column('uuid')
    uuid:string

    @Column({name: 'product_name'})
    productName:string
}
