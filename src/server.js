const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const http = require("http");
const WebSocket = require("ws");
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");

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

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Advertisement API',
      version: '1.0.0',
      description: 'API pour la gestion des annonces botaniste, l\'authentification des utilisateurs et le backoffice',
    },
    servers: [
      {
        url: 'http://localhost:1212', // Ajustez l'URL selon votre environnement
      },
    ],
  };
  
  const options = {
    swaggerDefinition,
    apis: ["./src/Routes/*.js"], // Ajustez le chemin selon votre structure de fichiers
  };
  
  const swaggerSpec = swaggerJsdoc(options);
  
  // Utiliser Swagger UI
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const PORT = process.env.PORT || 1212;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

