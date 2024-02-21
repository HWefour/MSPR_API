const routers = require("express").Router();
const plantControllers = require("../Controllers/PlantController")


routers.get("/" , plantControllers.getAllPlants);
routers.get("/:id" , plantControllers.getAllPlants);

module.exports = routers;