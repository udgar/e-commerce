import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRequiredTables1765889914245 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create User and Product Table
        await queryRunner.query(
            `CREATE TABLE customer_data (
            id BIGSERIAL PRIMARY KEY,
            uuid UUID NOT NULL DEFAULT gen_random_uuid(),
            name VARCHAR(255) NOT NULL);`
        ),
        await queryRunner.query(
            `CREATE TABLE products_info (
            id BIGSERIAL PRIMARY KEY,
            uuid UUID NOT NULL DEFAULT gen_random_uuid(),
            product_name VARCHAR(255) NOT NULL);`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remove user and product table 
        await queryRunner.query(
            `DROP TABLE customer_data`
        ),
        await queryRunner.query(
            `DROP TABLE products_info`
        )
    }

}
