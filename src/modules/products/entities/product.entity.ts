import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("products_info")
export class Product {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    productName:string
}
