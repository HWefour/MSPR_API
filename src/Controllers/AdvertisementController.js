const {createAdvertisement} = require("../Models/Advertisement");


exports.createAdvertisement = async (req , res)=> {
    try {
        const adv = await createAdvertisement(req.body);
        res.status(201).json(adv);
    }
    catch(err) {
        res.status(400).json({message : err.message});
    }
};

