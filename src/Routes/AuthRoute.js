const routers = require("express").Router();
const AuthControllers = require("../Controllers/AuthControllers");

routers.post("/signup" , AuthControllers.signUp);
routers.post("/login" , AuthControllers.logIn);

module.exports = {routers}