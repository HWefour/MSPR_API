const routers = require("express").Router();
const HomeControllers = require("../Controllers/HomeControllers");

routers.get("/" , HomeControllers.getAllAdvertisement);
routers.get("/:id" , HomeControllers.getAllAdvertisementById);
routers.get("/filtered/:id" , HomeControllers.getAllAdvertisementFiltered);
routers.get("/city" , HomeControllers.getAdvertisementByCity)

module.exports = routers ; 
