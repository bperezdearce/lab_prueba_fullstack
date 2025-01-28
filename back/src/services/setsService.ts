import { Set } from "../entities/SetEntity";
import { Card } from "../entities/CardEntity";
import { cardRepository } from "../repositories/indexRepository";
import { setRepository } from "../repositories/indexRepository";

export const getAllSetsService = async (): Promise<Set[]> => {
  const allSets = await setRepository.find();
  return allSets;
};

export const getSetCardsService = async (id: string): Promise<Card[]> => {
  const setCards = await cardRepository.find({
    relations: ["images", "markets"],
    where: { set_id: id },
  });

  if (!setCards || setCards.length === 0) {
    throw new Error("No se encontraron cartas para este set");
  }

  return setCards;
};
