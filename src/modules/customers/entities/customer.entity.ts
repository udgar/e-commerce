import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("customer_data")
export class Customer {


    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'name'})
    name:string

    @Column({name: 'user_id'})
    @Column('uuid')
    userId:string

    @Column({name: 'email'})
    email:string

    @Column({name:'phone_number'})
    phoneNumber:string
}
