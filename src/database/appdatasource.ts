import { DataSource } from "typeorm";

export const AppDataSource:DataSource=new DataSource({
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [],
      synchronize: true,
})