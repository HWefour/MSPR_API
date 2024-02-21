const routers = require("express").Router();
const TipsController = require("../Controllers/TipsController")

routers.get("/" , TipsController.getAllTips);
routers.post("/post/:id" , TipsController.postTips);

module.exports= routers;