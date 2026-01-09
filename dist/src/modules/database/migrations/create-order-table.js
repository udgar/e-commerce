"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderTable1765889914246 = void 0;
class CreateOrderTable1765889914246 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE orders_info (
            id BIGSERIAL PRIMARY KEY,
            order_id VARCHAR(225) NOT NULL DEFAULT gen_random_uuid(),
            customer_id VARCHAR(225) NOT NULL,
            status VARCHAR(225) NOT NULL,
            total_amount decimal NOT NULL);`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE orders_info`);
    }
}
exports.CreateOrderTable1765889914246 = CreateOrderTable1765889914246;
//# sourceMappingURL=create-order-table.js.map