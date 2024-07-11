const routers = require("express").Router();
const BackofficeControllers = require("../Controllers/BackofficeControllers");

/**
 * @swagger
 * /backoffice/users:
 *   get:
 *     summary: Obtenir tous les utilisateurs
 *     description: Récupère la liste de tous les utilisateurs
 *     responses:
 *       200:
 *         description: Liste des utilisateurs récupérée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID de l'utilisateur
 *                   username:
 *                     type: string
 *                     description: Nom d'utilisateur
 */

/**
 * @swagger
 * /backoffice/users/info/{id}:
 *   get:
 *     summary: Obtenir les informations d'un utilisateur
 *     description: Récupère les informations détaillées d'un utilisateur par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Informations de l'utilisateur récupérées avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de l'utilisateur
 *                 username:
 *                   type: string
 *                   description: Nom d'utilisateur
 */

/**
 * @swagger
 * /backoffice/adv:
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
 * /backoffice/adv/info:
 *   get:
 *     summary: Obtenir toutes les annonces avec informations détaillées
 *     description: Récupère la liste de toutes les annonces avec leurs informations détaillées
 *     responses:
 *       200:
 *         description: Liste des annonces avec informations récupérée avec succès
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
 *                   description:
 *                     type: string
 *                     description: Description de l'annonce
 */

/**
 * @swagger
 * /backoffice/adv/info/{id}:
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
 * /backoffice/adv_usr/{id}:
 *   get:
 *     summary: Obtenir les annonces d'un utilisateur
 *     description: Récupère la liste des annonces publiées par un utilisateur spécifique
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Liste des annonces de l'utilisateur récupérée avec succès
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
 * /backoffice/create:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     description: Crée un nouvel utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nom d'utilisateur
 *               password:
 *                 type: string
 *                 description: Mot de passe de l'utilisateur
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID de l'utilisateur
 *                 username:
 *                   type: string
 *                   description: Nom d'utilisateur
 */

/**
 * @swagger
 * /backoffice/edit/{id}:
 *   put:
 *     summary: Modifier un utilisateur
 *     description: Modifie les informations d'un utilisateur existant
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nom d'utilisateur
 *               password:
 *                 type: string
 *                 description: Mot de passe de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur modifié avec succès
 */

/**
 * @swagger
 * /backoffice/remove/{id}:
 *   delete:
 *     summary: Supprimer un utilisateur
 *     description: Supprime un utilisateur par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur supprimé avec succès
 */

/**
 * @swagger
 * /backoffice/remove/adv/{id}:
 *   delete:
 *     summary: Supprimer une annonce
 *     description: Supprime une annonce par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'annonce
 *     responses:
 *       200:
 *         description: Annonce supprimée avec succès
 */

routers.get("/users", BackofficeControllers.getAllUsers);
routers.get("/users/info/:id", BackofficeControllers.getInfoUser);
routers.get("/adv", BackofficeControllers.getAllAdvertisements);
routers.get("/adv/info", BackofficeControllers.getAllAdvertisementWithInfo);
routers.get("/adv/info/:id", BackofficeControllers.getAllAdvertisementById);
routers.get("/adv_usr/:id", BackofficeControllers.getAdvertisementForUser);
routers.post("/create", BackofficeControllers.createUser);
routers.put("/edit/:id", BackofficeControllers.editUser);
routers.delete('/remove/:id', BackofficeControllers.deleteUser);
routers.delete('/remove/adv/:id', BackofficeControllers.deleteAdvertisement);

module.exports = routers;




