import { Router } from "express";
import { getAllSetsController, getSetCardsController} from "../controllers/setsController";

const setsRouter: Router = Router();

/**
 * @swagger
 * /sets:
 *   get:
 *     summary: Lista todos los sets disponibles
 *     tags: [Sets]
 *     responses:
 *       200:
 *         description: Lista de sets obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Set'
 *       400:
 *         description: Error al conseguir los sets
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 * 
 */

setsRouter.get("/", getAllSetsController);

/**
 * @swagger
 * /sets/{id}/cards:
 *   get:
 *     summary: Lista las cartas correspondientes a un set específico
 *     tags: [Sets]
 *     responses:
 *       200:
 *         description: Lista de cartas del set obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Card'
 *       400:
 *         description: Error al conseguir las cartas del set especificado
 *         content:
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/Error'
 */

setsRouter.get("/:id/cards", getSetCardsController);

export default setsRouter;