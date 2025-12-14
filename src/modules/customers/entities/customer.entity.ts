import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("customer_data")
export class Customer {


    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name:string
}
