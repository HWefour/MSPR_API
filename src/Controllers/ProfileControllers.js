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
    const id = req.params.id ;
    try {
        const profilePlant = await myPlants(id);
        res.status(200).json(profilePlant)
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