import { Set } from "../entities/SetEntity";
import { Card } from "../entities/CardEntity";
import { cardRepository } from "../repositories/indexRepository";
import { setRepository } from "../repositories/indexRepository";

export const getAllSetsService = async (): Promise<Set[]> => {
  const allSets = await setRepository.find();
  return allSets;
};

export const getSetCardsService = async (id: string): Promise<Card[]> => {
  // Busca todas las cartas que tienen el "set_id" igual al "id" proporcionado
  const cards = await cardRepository.find({
    where: { set_id: id }, // Filtra las cartas por el campo "set_id"
  });

  // Si no se encuentran cartas, lanza un error
  if (!cards || cards.length === 0) {
    throw new Error("No se encontraron cartas para este set");
  }

  // Devuelve las cartas encontradas
  return cards;
};