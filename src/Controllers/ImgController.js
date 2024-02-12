const imageModel = require('../Models/Img');

const uploadImage = async (req, res) => {
  try {
      const idAdvertisement = req.body.idAdvertisement;
      if (!idAdvertisement) {
          return res.status(400).json({ message: "L'identifiant de l'annonce est requis." });
      }
      const imageUrl = req.file.path;

      await imageModel.createImage( imageUrl , idAdvertisement);

      return res.status(201).json({ message: 'Image téléchargée avec succès.' });
  } catch (error) {
      console.error('Erreur lors de l\'insertion de l\'image :', error);
      return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  uploadImage,
};