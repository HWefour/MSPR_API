const routers = require("express").Router();
const AdvertisementControlles = require("../Controllers/AdvertisementController");

routers.put("/" , AdvertisementControlles.createAdvertisement);

module.exports = routers