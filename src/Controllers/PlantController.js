const {getAllPlants , plantById} = require("../Models/Plantes");


exports.getAllPlants = async (req , res) =>{
    try{
        const plant = await getAllPlants();
        res.status(200).json(plant)
    }catch(err) {
        res.status(400).json({message : err.message});
    }
};

exports.plantById = async (req , res) => {
    const id = req.params.id
    try {
        const plant =  await plantById(id);
        res.status(200).json(plant)
    } catch (err) {
        res.status(400).json({message : err.message})
    }
}