const routers = require("express").Router();
const settingControllers = require("../Controllers/SettingsControllers");


routers.get("/:id" , settingControllers.getInfoAccount);
routers.delete("/delete/:id" , settingControllers.deleteAccount);
routers.patch("/update/:id" , settingControllers.editInfoAccount);

module.exports = routers;