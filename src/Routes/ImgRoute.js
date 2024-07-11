const routers = require("express").Router();
const upload = require('../Middleware/MulterMiddleware');
const imagesController = require('../Controllers/ImgController');

/**
 * @swagger
 * /images/upload:
 *   post:
 *     summary: Télécharger une image
 *     description: Télécharge une image pour une annonce
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: L'image à télécharger
 *     responses:
 *       201:
 *         description: Image téléchargée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 *                   description: URL de l'image téléchargée
 */

/**
 * @swagger
 * /images/show/{idAdvertisement}:
 *   get:
 *     summary: Obtenir les images d'une annonce
 *     description: Récupère les images associées à une annonce par ID de l'annonce
 *     parameters:
 *       - in: path
 *         name: idAdvertisement
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'annonce
 *     responses:
 *       200:
 *         description: Images récupérées avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de l'image
 *                   url:
 *                     type: string
 *                     description: URL de l'image
 */

routers.post('/upload', upload.single('image'), imagesController.uploadImage);
routers.get('/show/:idAdvertisement', imagesController.getImagesByAdvertisementId);

module.exports = routers;
