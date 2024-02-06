const routers = require("express").Router();
const AuthControllers = require("../Controllers/AuthControllers");
const authenticateToken = require("../Middleware/AuthMiddleware");

routers.post("/signup", AuthControllers.signUp);
routers.post("/login", AuthControllers.logIn);

/* routers.post("/backoffice", authenticateToken, (req, res) => {
  const userRole = req.user.idRole;
  if (userRole === 1) {
      res.json({ message: 'Welcome to the backoffice', user: req.user });
  } else {
      res.status(403).json({ message: 'Access forbidden' });
  }
}); */


module.exports = routers;

