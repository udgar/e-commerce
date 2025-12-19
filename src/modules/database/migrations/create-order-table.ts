import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOrderTable1765889914246 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE orders_info (
            id BIGSERIAL PRIMARY KEY,
            order_id VARCHAR(225) NOT NULL DEFAULT gen_random_uuid(),
            customer_id VARCHAR(225) NOT NULL,
            status VARCHAR(225) NOT NULL,
            total_amount decimal NOT NULL);`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remove user and product table 
        await queryRunner.query(
            `DROP TABLE orders_info`
        )
    }

}