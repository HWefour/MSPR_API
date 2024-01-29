const routes = require("express").Router();
const AdvertisementRoute = require("../Controllers/AdvertisementController");

routes.put("/" , AdvertisementRoute.createAdvertisement);