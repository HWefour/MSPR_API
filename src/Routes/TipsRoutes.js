const routers = require("express").Router();
const TipsController = require("../Controllers/TipsController")

routers.get("/" , TipsController.getAllTips);
routers.post("/post" , TipsController.postTips);
routers.get("/postplant/:id")

module.exports= routers;