const routers = require("express").Router();
const BackofficeControllers = require("../Controllers/BackofficeControllers");

routers.get("/users" , BackofficeControllers.getAllUsers);
routers.get("/users/info/:id" , BackofficeControllers.getInfoUser);
routers.get("/adv" , BackofficeControllers.getAllAdvertisements);
routers.get("/adv/info" , BackofficeControllers.getAllAdvertisementWithInfo);
routers.get("/adv/info/:id" , BackofficeControllers.getAllAdvertisementById);
routers.get("/adv_usr/:id" , BackofficeControllers.getAdvertisementForUser);
routers.post("/create" , BackofficeControllers.createUser);
routers.put("/edit/:id", BackofficeControllers.editUser);
routers.delete('/remove/:id', BackofficeControllers.deleteUser);
routers.delete('/remove/adv/:id' , BackofficeControllers.deleteAdvertisement);

module.exports = routers;