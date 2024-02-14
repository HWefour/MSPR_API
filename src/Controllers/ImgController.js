
const imageModel = require("../Models/Img");
async function uploadImage(req, res) {
  try {
    const { idAdvertisement } = req.body;
    if (!idAdvertisement) {
      return res.status(400).json({ message: "L'identifiant de l'annonce est requis." });
    }
    const imageUrl = req.file.filename;
    await imageModel.createImage(imageUrl, idAdvertisement);
    res.send("Image uploaded successfully!");
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: error.message });
  }
}

async function getImagesByAdvertisementId(req, res) {
  try {
    const { idAdvertisement } = req.params;
    const images = await imageModel.getImagesByAdvertisementId(idAdvertisement);
    
    const baseUrl = req.protocol + '://' + req.get('host');
    const imagesWithUrls = images.map(image => ({
      ...image,
      url: baseUrl + '/uploads/' + image.url
    }));
    
    res.json(imagesWithUrls);
  } catch (error) {
    console.error('Error fetching images by advertisement ID:', error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  uploadImage,
  getImagesByAdvertisementId
};