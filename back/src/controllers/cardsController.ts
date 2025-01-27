import { Request, Response } from "express";
import { getCardDetailsService } from "../services/cardsService";

export const getCardDetailsController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  console.log("Id de la carta:", id);
  try {
    const card = await getCardDetailsService(id);
    res.status(200).json(card);
  } catch (error) {
    res.status(404).json({ message: "Carta no encontrada" });
  } 
};