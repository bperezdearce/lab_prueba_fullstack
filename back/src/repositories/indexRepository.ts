import { AppDataSource } from "../config/data-source";
import { Set } from "../entities/SetEntity";
import { Card } from "../entities/CardEntity";

export const setRepository = AppDataSource.getRepository(Set);
export const cardRepository = AppDataSource.getRepository(Card);