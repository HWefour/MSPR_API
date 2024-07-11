const routers = require("express").Router();
const jobControllers = require("../Controllers/JobController");

/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Obtenir toutes les offres d'emploi
 *     description: Récupère la liste de toutes les offres d'emploi
 *     responses:
 *       200:
 *         description: Liste des offres d'emploi récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de l'offre d'emploi
 *                   title:
 *                     type: string
 *                     description: Titre de l'offre d'emploi
 */

/**
 * @swagger
 * /jobs/create:
 *   post:
 *     summary: Créer une nouvelle offre d'emploi
 *     description: Crée une nouvelle offre d'emploi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Titre de l'offre d'emploi
 *               description:
 *                 type: string
 *                 description: Description de l'offre d'emploi
 *     responses:
 *       201:
 *         description: Offre d'emploi créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de l'offre d'emploi
 *                 title:
 *                   type: string
 *                   description: Titre de l'offre d'emploi
 *                 description:
 *                   type: string
 *                   description: Description de l'offre d'emploi
 */

routers.get("/", jobControllers.getAllJobs);
routers.post('/create', jobControllers.createJob);

module.exports = routers;
