"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("dotenv/config");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: ['src/modules/products/entities/*.entity.js',
        'src/modules/customers/entities/*.entity.js',
        'src/modules/orders/entities/*.entity.js'],
    migrations: ['src/modules/database/migrations/.js'],
    synchronize: false,
    migrationsRun: false,
    migrationsTableName: 'migrations',
    migrationsTransactionMode: 'all'
});
//# sourceMappingURL=data-source.js.map