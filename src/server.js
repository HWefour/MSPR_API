const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors"); 

const HomeRoute = require("./Routes/HomeRoute");
const ProfileRoute = require("./Routes/ProfileRoutes");
const SettingsRoute = require("./Routes/SettingsRoute");
const BackofficeRoute = require("./Routes/BackofficeRoutes");
const AdvertisementRoute = require("./Routes/AdvertisementRoute");
const AuthRoute = require("./Routes/AuthRoute");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/home", HomeRoute);
app.use("/profile", ProfileRoute);
app.use("/settings", SettingsRoute);
app.use("/backoffice", BackofficeRoute);
app.use("/create_adv" , AdvertisementRoute);
app.use("/auth" , AuthRoute);

// TESTING THE SERVER
app.get("/test", async (req, res) => {
  res.status(200).json({ success: true });
});

// LAUNCHING THE SERVER
app.listen(1212, () => {
  console.log("The server is running on the port 1212");
});

module.exports = app;
