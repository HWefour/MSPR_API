const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const http = require("http");
const WebSocket = require("ws");

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

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
app.use("/create_adv", AdvertisementRoute);
app.use("/auth", AuthRoute);
app.use("/job", JobRoute);
app.use("/plant", PlantRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/images", imageRoutes);
app.use("/tips", TipsRoutes);

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        console.log(`Received message => ${message}`);
        // Broadcast the message to all connected clients except the sender
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 1212;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

