import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRequiredTables1765889914245 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE customer_data (
            id BIGSERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            user_id VARCHAR(225) NOT NULL DEFAULT gen_random_uuid(),
            email VARCHAR(225) NOT NULL,
            phone_number VARCHAR(225) NOT NULL);`
        ),
        await queryRunner.query(
            `CREATE TABLE products_info (
            id BIGSERIAL PRIMARY KEY,
            product_id VARCHAR(225) NOT NULL DEFAULT gen_random_uuid(),
            product_name VARCHAR(255) NOT NULL,
            price DECIMAL NOT NULL,
            category VARCHAR(225) NOT NULL);`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DROP TABLE customer_data`
        ),
        await queryRunner.query(
            `DROP TABLE products_info`
        )
    }

}
