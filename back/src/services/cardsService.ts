import { Card } from "../entities/CardEntity";
import { cardRepository } from "../repositories/indexRepository";

export const getCardDetailsService = async (id: string): Promise<Card> => {
  const card = await cardRepository.findOne({
    relations: ["images", "markets"],
    where: { id },
  });
  if (!card) {
    throw new Error("Carta no encontrada");
  }

  return card;
};