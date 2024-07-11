const routers = require("express").Router();
const settingControllers = require("../Controllers/SettingsControllers");

/**
 * @swagger
 * /settings/{id}:
 *   get:
 *     summary: Obtenir les informations du compte
 *     description: Récupère les informations du compte par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du compte
 *     responses:
 *       200:
 *         description: Informations du compte récupérées avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID du compte
 *                 name:
 *                   type: string
 *                   description: Nom de l'utilisateur
 *                 email:
 *                   type: string
 *                   description: Email de l'utilisateur
 */

/**
 * @swagger
 * /settings/delete/{id}:
 *   delete:
 *     summary: Supprimer un compte
 *     description: Supprime un compte par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du compte
 *     responses:
 *       200:
 *         description: Compte supprimé avec succès
 */

/**
 * @swagger
 * /settings/update/{id}:
 *   put:
 *     summary: Mettre à jour les informations du compte
 *     description: Met à jour les informations du compte par ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du compte
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nom de l'utilisateur
 *               email:
 *                 type: string
 *                 description: Email de l'utilisateur
 *     responses:
 *       200:
 *         description: Informations du compte mises à jour avec succès
 */

routers.get("/:id", settingControllers.getInfoAccount);
routers.delete("/delete/:id", settingControllers.deleteAccount);
routers.put("/update/:id", settingControllers.editInfoAccount);

module.exports = routers;
