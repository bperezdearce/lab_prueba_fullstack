import { Request, Response } from "express";
import { Set } from "../entities/SetEntity";
import { getAllSetsService } from "../services/setsService";
import { getSetCardsService } from "../services/setsService";

export const getAllSetsController = async (req: Request, res: Response) => {
  try {
    const sets: Set[] = await getAllSetsService();
    res.status(200).json(sets);
  } catch (error) {
    res.status(400).json({ message: "Error al conseguir los sets" });
  }
};

export const getSetCardsController = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const { id } = req.params;

  try {
    const setCards = await getSetCardsService(id);
    res.status(200).json(setCards);
  }

  catch (error: any) {
    if (error.message === "not found") {
      res.status(404).json({ message: "No se encontraron cartas" });
    } else {
      res.status(500).json({ message: "Error del servidor" });
    }
  }
};