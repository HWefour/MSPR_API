const routers = require("express").Router();
const AuthControllers = require("../Controllers/AuthControllers");
const { authenticateToken } = require("../Middleware/AuthMiddleware");

routers.post("/signup",  AuthControllers.signUp);
routers.post("/login",  AuthControllers.logIn);
routers.post("/back",  AuthControllers.back);

module.exports = routers;
