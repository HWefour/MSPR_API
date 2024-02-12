const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../Middleware/MulterMiddleware');
const imagesController = require('../Controllers/ImgController');

// POST /images/upload
router.post('/upload', uploadMiddleware.single('image'), imagesController.uploadImage);

module.exports = router;
