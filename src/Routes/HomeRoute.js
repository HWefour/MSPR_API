const routers = require("express").Router();
const HomeControllers = require("../Controllers/HomeControllers");

routers.get("/" , HomeControllers.getAllAdvertisement);
routers.get("/:id" , HomeControllers.getAllAdvertisementById);

module.exports = routers ; 
