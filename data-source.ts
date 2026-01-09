import { DataSource } from 'typeorm';
import 'dotenv/config';


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: ['src/modules/products/entities/*.entity.js'
        ,'src/modules/customers/entities/*.entity.js'
        ,'src/modules/orders/entities/*.entity.js'],
    migrations: ['src/modules/database/migrations/.js'],
    synchronize: false,
    migrationsRun: false,
    migrationsTableName: 'migrations',
    migrationsTransactionMode: 'all'
});