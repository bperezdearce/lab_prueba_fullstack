import { Router } from "express";
import { getCardDetailsController } from "../controllers/cardsController";

const cardsRouter: Router = Router();

cardsRouter.get("/:id", getCardDetailsController);

export default cardsRouter;