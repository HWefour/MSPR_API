const routers = require("express").Router();
const settingControllers = require("../Controllers/SettigsControllers");


routers.get("/:id" , settingControllers.getInfoAccount);
routers.delete("/delete/:id" , settingControllers.deleteAccount);
routers.put("/update/:id" , settingControllers.editInfoAccount);

module.exports = routers;