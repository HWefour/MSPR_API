routers = require("express").Router();
const jobControllers = require("../Controllers/JobController")

routers.get("/" , jobControllers.getAllJobs);
routers.post('/create' , jobControllers.createJob);

module.exports = routers;