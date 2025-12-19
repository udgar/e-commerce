export class CreateRequiredTables1765889914245 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE customer_data (
            id BIGSERIAL PRIMARY KEY,
            uuid UUID NOT NULL DEFAULT gen_random_uuid(),
            name VARCHAR(255) NOT NULL);`),
            await queryRunner.query(`CREATE TABLE products_info (
            id BIGSERIAL PRIMARY KEY,
            uuid UUID NOT NULL DEFAULT gen_random_uuid(),
            product_name VARCHAR(255) NOT NULL);`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE customer_data`),
            await queryRunner.query(`DROP TABLE products_info`);
    }
}
//# sourceMappingURL=1765889914245-create-required-tables.js.map