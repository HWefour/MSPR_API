const {getAllAdvertisement , getAllAdvertisementById} = require("../Models/Home")


exports.getAllAdvertisement = async (req , res)=> {
    console.log("zumbaCONTROLLER")
    try{
        const advertisement = await getAllAdvertisement();
        res.status(200).json(advertisement);
    } catch(err) {
        res.status(400).json({message : err.message})
    }
};


exports.getAllAdvertisementById = async (req , res)=>{
    const id = req.params.id
    try{
        const advertisement = await getAllAdvertisementById(id);
        res.status(200).json(advertisement);
    }catch(err){
        res.status(400).json({message: err.message})
    }
};

exports.getAllAdvertisementFiltered = async (req , res)=> {
    const id = req.params.id
    try{
        const advertisement = await this.getAllAdvertisementFiltered(id);
        res.status(200).json(advertisement);
    }
    catch(err){
        res.status(400).json({message : err.message})
    }
};