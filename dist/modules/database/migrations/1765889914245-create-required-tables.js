"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRequiredTables1765889914245 = void 0;
class CreateRequiredTables1765889914245 {
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
exports.CreateRequiredTables1765889914245 = CreateRequiredTables1765889914245;
//# sourceMappingURL=1765889914245-create-required-tables.js.map