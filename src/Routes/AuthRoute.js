const routers = require("express").Router();
const AuthControllers = require("../Controllers/AuthControllers");
const authenticateToken = require("../Middleware/AuthMiddleware");

routers.post("/signup" , AuthControllers.signUp);
routers.post("/login" , AuthControllers.logIn);

routers.get("/protected", authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
  });

module.exports = routers;