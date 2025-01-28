import { Router } from "express";
import { getCardDetailsController } from "../controllers/cardsController";

const cardsRouter: Router = Router();

/**
 * @swagger
 * /cards/{id}:
 *   get:
 *     summary: Información detallada de una carta específica
 *     tags: [Cards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la carta a obtener
 *     responses:
 *       200:
 *         description: Carta obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Card'
 *       400:
 *         description: Error al conseguir el detalle de la carta
 *         content: 
 *          application/json:
 *              schema:
 *                  $ref: '#/components/schemas/Error'    
 */

cardsRouter.get("/:id", getCardDetailsController);

export default cardsRouter;