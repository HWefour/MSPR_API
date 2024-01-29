const {createAdvertisement} = require("../Models/Advertisement");


exports.createAdvertisement = async (req , res)=> {
    try {
        const adv = await createAdvertisement();
        res.status(200).json(adv);
    }
    catch(err) {
        res.status(400).json({message : err.message});
    }
};

