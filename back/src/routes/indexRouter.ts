import { Router } from "express";
import setsRouter from "./setsRouter";
import cardsRouter from "./cardsRouter";

const indexRouter: Router = Router();

indexRouter.use("/sets", setsRouter);
indexRouter.use("/cards", cardsRouter);

export default indexRouter;