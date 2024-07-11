const routers = require("express").Router();
const ProfileControllers = require("../Controllers/ProfileControllers");

/**
 * @swagger
 * /profiles/{id}:
 *   get:
 *     summary: Obtenir les détails du profil
 *     description: Récupère les détails du profil d'un utilisateur par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Détails du profil récupérés avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de l'utilisateur
 *                 name:
 *                   type: string
 *                   description: Nom de l'utilisateur
 *                 email:
 *                   type: string
 *                   description: Email de l'utilisateur
 */

/**
 * @swagger
 * /profiles/profilePlant/{id}:
 *   get:
 *     summary: Obtenir les plantes d'un profil
 *     description: Récupère toutes les plantes associées au profil d'un utilisateur par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Plantes du profil récupérées avec succès
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
 * /profiles/profileAds/{id}:
 *   get:
 *     summary: Obtenir les annonces d'un profil
 *     description: Récupère toutes les annonces associées au profil d'un utilisateur par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Annonces du profil récupérées avec succès
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

routers.get("/:id", ProfileControllers.getProfileDetails);
routers.get("/profilePlant/:id", ProfileControllers.myPlants);
routers.get("/profileAds/:id", ProfileControllers.myAdvertisement);

module.exports = routers;
