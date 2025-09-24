import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import * as process from 'node:process';

dotenv.config(); // load .env file

export default new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false, // ⚠️ dev only
  entities: ['dist/**/*.entity.js'],
  migrations: ['src/db/migrations/*.ts'],
  migrationsRun: false,
  logging: true,
});
