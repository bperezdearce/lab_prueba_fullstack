import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";
import { Card } from "../entities/CardEntity";
import { Set } from "../entities/SetEntity";
import { Image } from "../entities/ImageEntity";
import { Market } from "../entities/MarketEntity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false,
  logging: true,
  entities: [Card, Set, Image, Market],
  migrations: [],
  subscribers: [],
});