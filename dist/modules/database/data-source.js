import { DataSource } from 'typeorm';
import 'dotenv/config';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [__dirname + '/../*/entities/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    synchronize: false,
    migrationsRun: false,
    migrationsTableName: 'migrations',
    migrationsTransactionMode: 'all'
});
//# sourceMappingURL=data-source.js.map