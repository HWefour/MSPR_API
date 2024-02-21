const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors"); 
const path = require('path');

const HomeRoute = require("./Routes/HomeRoute");
const ProfileRoute = require("./Routes/ProfileRoutes");
const SettingsRoute = require("./Routes/SettingsRoute");
const BackofficeRoute = require("./Routes/BackofficeRoutes");
const AdvertisementRoute = require("./Routes/AdvertisementRoute");
const AuthRoute = require("./Routes/AuthRoute");
const JobRoute = require("./Routes/JobRoute");
const PlantRoutes = require("./Routes/PlantRoutes");
const imageRoutes = require("./Routes/ImgRoute");
const TipsRoutes = require("./Routes/TipsRoutes");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/home", HomeRoute);
app.use("/profile", ProfileRoute);
app.use("/settings", SettingsRoute);
app.use("/backoffice", BackofficeRoute);
app.use("/create_adv" , AdvertisementRoute);
app.use("/auth" , AuthRoute);
app.use("/job" , JobRoute);
app.use("/plant" , PlantRoutes);
app.use("/uploads",  express.static(path.join(__dirname, 'uploads')));
app.use("/images", imageRoutes);
app.use("/tips" , TipsRoutes);

// TESTING THE SERVER
app.get("/test", async (req, res) => {
  res.status(200).json({ success: true });
});

// LAUNCHING THE SERVER
app.listen(1212, () => {
  console.log("The server is running on the port 1212");
});

module.exports = app;
