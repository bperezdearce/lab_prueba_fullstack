import { Request, Response } from "express";
import { getCardDetailsService } from "../services/cardsService";

export const getCardDetailsController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;
  try {
    const card = await getCardDetailsService(id);
    res.status(200).json(card);
  } catch (error) {
    res.status(400).json({ message: "Error al conseguir el detalle de la carta" });
  } 
};