import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("customer_data")
export class Customer {


    @PrimaryGeneratedColumn()
    id: number

    @Column('uuid')
    uuid:string

    @Column({name: 'name'})
    name:string
}
