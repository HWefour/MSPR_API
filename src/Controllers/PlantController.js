const {getAllPlants} = require("../Models/Plantes");


exports.getAllPlants = async (req , res) =>{
    try{
        const plant = await getAllPlants();
        res.status(200).json(plant)
    }catch(err) {
        res.status(400).json({message : err.message});
    }
};

