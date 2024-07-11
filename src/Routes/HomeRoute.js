const routers = require("express").Router();
const HomeControllers = require("../Controllers/HomeControllers");

/**
 * @swagger
 * /home:
 *   get:
 *     summary: Obtenir toutes les annonces
 *     description: Récupère la liste de toutes les annonces
 *     responses:
 *       200:
 *         description: Liste des annonces récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de l'annonce
 *                   title:
 *                     type: string
 *                     description: Titre de l'annonce
 */

/**
 * @swagger
 * /home/{id}:
 *   get:
 *     summary: Obtenir une annonce par ID
 *     description: Récupère les informations détaillées d'une annonce par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'annonce
 *     responses:
 *       200:
 *         description: Informations de l'annonce récupérées avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de l'annonce
 *                 title:
 *                   type: string
 *                   description: Titre de l'annonce
 *                 description:
 *                   type: string
 *                   description: Description de l'annonce
 */

/**
 * @swagger
 * /home/filtered/{id}:
 *   get:
 *     summary: Obtenir les annonces filtrées par un certain critère
 *     description: Récupère les annonces filtrées par un certain critère (ex. catégorie, prix)
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Critère de filtrage (ex. ID de catégorie)
 *     responses:
 *       200:
 *         description: Liste des annonces filtrées récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de l'annonce
 *                   title:
 *                     type: string
 *                     description: Titre de l'annonce
 */

/**
 * @swagger
 * /home/city/{city}:
 *   get:
 *     summary: Obtenir les annonces par ville
 *     description: Récupère les annonces publiées dans une certaine ville
 *     parameters:
 *       - in: path
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *         description: Nom de la ville
 *     responses:
 *       200:
 *         description: Liste des annonces par ville récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de l'annonce
 *                   title:
 *                     type: string
 *                     description: Titre de l'annonce
 */

routers.get("/", HomeControllers.getAllAdvertisement);
routers.get("/:id", HomeControllers.getAllAdvertisementById);
routers.get("/filtered/:id", HomeControllers.getAllAdvertisementFiltered);
routers.get("/city/:city", HomeControllers.getAdvertisementByCity);

module.exports = routers;
