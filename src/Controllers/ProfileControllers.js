const {getProfileDetails , myPlants , myAdvertisement} = require("../Models/Profile");

exports.getProfileDetails =  async (req , res) => {
    const id = req.params.id ;
    try {
        const profile = await getProfileDetails(id);
        res.status(200).json(profile)
    } catch (err) {
        res.status(400).json({message : err.message})
    }
};

exports.myPlants = async (req , res)=> {
    try {
        const {id} = req.params ;
        const profilePlants = await myPlants(id);
        const baseUrl = req.protocol + '://' + req.get('host');
        imagesWithUrls = profilePlants.map(profilPlant => ({
            ...profilPlant, url : baseUrl +'/uploads/' + profilPlant.url
        }))
        res.status(200).json(imagesWithUrls)
    } catch(err){
        res.status(400).json({message : err.message});
    }
};

exports.myAdvertisement = async (req , res)=> {
    const id = req.params.id;
    try{
        const profileAds = await myAdvertisement(id);
        res.status(200).json(profileAds);
    }catch(err) {
        res.status(400).json({message: err.message});
    }
};