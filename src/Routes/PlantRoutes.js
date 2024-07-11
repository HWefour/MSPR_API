const routers = require("express").Router();
const plantControllers = require("../Controllers/PlantController");

/**
 * @swagger
 * /plants:
 *   get:
 *     summary: Obtenir toutes les plantes
 *     description: Récupère la liste de toutes les plantes
 *     responses:
 *       200:
 *         description: Liste des plantes récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de la plante
 *                   name:
 *                     type: string
 *                     description: Nom de la plante
 */

/**
 * @swagger
 * /plants/{id}:
 *   get:
 *     summary: Obtenir une plante par ID
 *     description: Récupère les informations détaillées d'une plante par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la plante
 *     responses:
 *       200:
 *         description: Informations de la plante récupérées avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de la plante
 *                 name:
 *                   type: string
 *                   description: Nom de la plante
 *                 description:
 *                   type: string
 *                   description: Description de la plante
 */

routers.get("/", plantControllers.getAllPlants);
routers.get("/:id", plantControllers.plantById);

module.exports = routers;
