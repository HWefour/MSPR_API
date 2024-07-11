const routers = require("express").Router();
const AuthControllers = require("../Controllers/AuthControllers");
const { authenticateToken } = require("../Middleware/AuthMiddleware");

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Inscription d'un nouvel utilisateur
 *     description: Crée un nouveau compte utilisateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Le nom d'utilisateur
 *                 example: "john_doe"
 *               password:
 *                 type: string
 *                 description: Le mot de passe de l'utilisateur
 *                 example: "password123"
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
 *                   description: L'ID de l'utilisateur créé
 *                   example: "60d21b4667d0d8992e610c85"
 *                 username:
 *                   type: string
 *                   description: Le nom d'utilisateur
 *                   example: "john_doe"
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

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Connexion de l'utilisateur
 *     description: Connecte un utilisateur avec son nom d'utilisateur et mot de passe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Le nom d'utilisateur
 *                 example: "john_doe"
 *               password:
 *                 type: string
 *                 description: Le mot de passe de l'utilisateur
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Connexion réussie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Le token JWT
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
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
 *                   example: "Nom d'utilisateur ou mot de passe incorrect"
 */

/**
 * @swagger
 * /auth/back:
 *   post:
 *     summary: Point de terminaison de retour
 *     description: Point de terminaison générique pour des tests ou des opérations de retour
 *     responses:
 *       200:
 *         description: Opération réussie
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
 *                   example: "Requête invalide"
 */

routers.post("/signup", AuthControllers.signUp);
routers.post("/login", AuthControllers.logIn);
routers.post("/back", AuthControllers.back);

module.exports = routers;
