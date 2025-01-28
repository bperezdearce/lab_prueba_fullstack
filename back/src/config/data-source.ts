import { DataSource } from "typeorm";
import { DATABASE_URL, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from "./envs";

const isProduction = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: isProduction ? DATABASE_URL : undefined,
  host: isProduction ? undefined : DB_HOST,
  port: isProduction ? undefined : Number(DB_PORT),
  username: isProduction ? undefined : DB_USER,
  password: isProduction ? undefined : DB_PASSWORD,
  database: isProduction ? undefined : DB_NAME,
  synchronize: !isProduction,
  logging: !isProduction,
  entities: ["src/entities/**/*.ts"],
  migrations: [],
});