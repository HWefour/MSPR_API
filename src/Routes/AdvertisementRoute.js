const routers = require("express").Router();
const AdvertisementControllers = require("../Controllers/AdvertisementController");

/**
 * @swagger
 * /advertisements:
 *   post:
 *     summary: Créer une nouvelle annonce
 *     description: Crée une nouvelle annonce publicitaire
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Le titre de l'annonce
 *                 example: "Vente de voiture"
 *               description:
 *                 type: string
 *                 description: La description de l'annonce
 *                 example: "Une voiture d'occasion en bon état"
 *               price:
 *                 type: number
 *                 description: Le prix de l'annonce
 *                 example: 15000
 *               category:
 *                 type: string
 *                 description: La catégorie de l'annonce
 *                 example: "Automobile"
 *     responses:
 *       201:
 *         description: Annonce créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: L'ID de l'annonce créée
 *                   example: "60d21b4667d0d8992e610c85"
 *                 title:
 *                   type: string
 *                   description: Le titre de l'annonce
 *                   example: "Vente de voiture"
 *                 description:
 *                   type: string
 *                   description: La description de l'annonce
 *                   example: "Une voiture d'occasion en bon état"
 *                 price:
 *                   type: number
 *                   description: Le prix de l'annonce
 *                   example: 15000
 *                 category:
 *                   type: string
 *                   description: La catégorie de l'annonce
 *                   example: "Automobile"
 *       400:
 *         description: Requête invalide
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Message d'erreur
 *                   example: "Les données fournies sont invalides"
 */
routers.post("/", AdvertisementControllers.createAdvertisement);

module.exports = routers;
