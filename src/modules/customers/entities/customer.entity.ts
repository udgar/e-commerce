import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("customer_data")
export class Customer {
    

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string
}
