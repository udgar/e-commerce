import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products_info")
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    productName:string
}
