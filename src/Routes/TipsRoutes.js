const routers = require("express").Router();
const TipsController = require("../Controllers/TipsController");

/**
 * @swagger
 * /tips:
 *   get:
 *     summary: Obtenir tous les conseils
 *     description: Récupère la liste de tous les conseils
 *     responses:
 *       200:
 *         description: Liste des conseils récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID du conseil
 *                   title:
 *                     type: string
 *                     description: Titre du conseil
 */

/**
 * @swagger
 * /tips/post:
 *   post:
 *     summary: Publier un nouveau conseil
 *     description: Publie un nouveau conseil
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Titre du conseil
 *               content:
 *                 type: string
 *                 description: Contenu du conseil
 *     responses:
 *       200:
 *         description: Conseil publié avec succès
 */

/**
 * @swagger
 * /tips/postplant/{id}:
 *   get:
 *     summary: Obtenir les conseils pour une plante spécifique
 *     description: Récupère les conseils associés à une plante par ID de plante
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la plante
 *     responses:
 *       200:
 *         description: Conseils pour la plante récupérés avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID du conseil
 *                   title:
 *                     type: string
 *                     description: Titre du conseil
 */

routers.get("/", TipsController.getAllTips);
routers.post("/post", TipsController.postTips);
routers.get("/postplant/:id", TipsController.tipsPlant);

module.exports = routers;
