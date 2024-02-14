
const routers = require("express").Router();
const upload = require('../Middleware/MulterMiddleware');
const imagesController = require('../Controllers/ImgController');

// POST /images/upload
routers.post('/upload', upload.single('image'), imagesController.uploadImage);
routers.get('/show/:idAdvertisement' , imagesController.getImagesByAdvertisementId);

module.exports = routers; 