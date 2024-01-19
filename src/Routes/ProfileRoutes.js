const routers = require("express").Router();
const ProfileControllers = require("../Controllers/ProfileControllers");

routers.get("/:id" , ProfileControllers.getProfileDetails);
routers.get("/profilePlant/:id" , ProfileControllers.myPlants);
routers.get("/profileAds/:id" , ProfileControllers.myAdvertisement);

module.exports = routers ;