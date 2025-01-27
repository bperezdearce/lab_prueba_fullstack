import { Router } from "express";
import { getAllSetsController, getSetCardsController } from "../controllers/setsController";

const setsRouter: Router = Router();

setsRouter.get("/", getAllSetsController);
setsRouter.get("/:id/cards", getSetCardsController);

export default setsRouter;