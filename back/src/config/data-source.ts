import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, DATABASE_URL } from "./envs";
import { Card } from "../entities/CardEntity";
import { Set } from "../entities/SetEntity";
import { Image } from "../entities/ImageEntity";
import { Market } from "../entities/MarketEntity";

const isProduction = process.env.NODE_ENV === "production";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: DATABASE_URL || undefined,
  host: DATABASE_URL ? undefined : DB_HOST,
  port: DATABASE_URL ? undefined : Number(DB_PORT),
  username: DATABASE_URL ? undefined : DB_USER,
  password: DATABASE_URL ? undefined : DB_PASSWORD,
  database: DATABASE_URL ? undefined : DB_NAME,
  synchronize: !isProduction, 
  logging: !isProduction, 
  entities: [Card, Set, Image, Market],
  migrations: [], 
  subscribers: [],
});