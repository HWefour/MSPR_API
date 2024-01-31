const routers = require("express").Router();
const AdvertisementControlles = require("../Controllers/AdvertisementController");

routers.post("/" , AdvertisementControlles.createAdvertisement);

module.exports = routers